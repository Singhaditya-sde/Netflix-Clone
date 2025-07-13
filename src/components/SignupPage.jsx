import React from 'react'
import netflix_bg from '../assets/images/netflix_bg.jpg'
import { Link } from 'react-router-dom';
import Netflix_Logo_CMYK from '../assets/images/Netflix_Logo_CMYK.png'
import { useState , useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

function SignupPage() {
  const location = useLocation();
  const naviagte = useNavigate();
  const[email,setEmail] = useState(location.state?.email || '');
  const[password,setPassword] = useState('');
  const[confirmPassword,setConfirmPassword] = useState('');
  const[error,setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    if(password.length<6){
      setError("Password Should be at least 6 characters.")
      return;
    }

    if(password !== confirmPassword){
      setError("Password are not match.")
      return;
    }

    try{
      const userCredential = await createUserWithEmailAndPassword(auth ,email ,password);
      const user = userCredential.user;

      await setDoc(doc(db,"users",user.uid),{
        email: user.email,
        isPremium: false,
      });
      naviagte('/browse');
    }catch (err){
      console.error('Error signing up:',err.message);
      if(err.code == 'auth/email-already-in-use'){
        setError('This email is already in use. please try logging in.');
      }else{
        setError('Failled Create an account. please try again.')
      }
    }
  };

  return (
    <div className="relative h-screen w-full bg-black flex justify-center items-center">
      
      <img
        src={netflix_bg}
        alt="Movies and TV shows background"
        className="hidden sm:block absolute top-0 left-0 h-full w-full object-cover z-0"
      />

      <div className="hidden sm:block absolute top-0 left-0 h-full w-full bg-black/60 z-10" />

      <header className="absolute top-0 left-0 z-20 p-4 sm:p-6">
        <Link to='/'>
          <img
            src={Netflix_Logo_CMYK}
            alt='netflix-logo'
            className='w-28 sm:w-36 md:w-44'
          />
        </Link>
      </header>

      <div className="relative z-20 p-4 sm:p-16 sm:bg-black/75 rounded-md w-full max-w-md">
        <h1 className='text-white text-3xl sm:text-4xl font-bold mb-8'>
          Sign up
        </h1>
        
        <form  
        onSubmit={handleSignUp}
        className="flex flex-col gap-4">
          <input
            type='email'
            placeholder='Email or phone number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-3 w-full rounded-sm text-white placeholder-gray-400 bg-gray-700/80 border border-gray-600 focus:border-white outline-none'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-3 w-full rounded-sm text-white placeholder-gray-400 bg-gray-700/80 border border-gray-600 focus:border-white outline-none'
          />
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='p-3 w-full rounded-sm text-white placeholder-gray-400 bg-gray-700/80 border border-gray-600 focus:border-white outline-none'
          />
          <button className='p-3 w-full mt-6 rounded-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors'>
            Sign Up
          </button>
        </form>

         {error && <p className="text-orange-500 mt-4">{error}</p>}

        <p className='text-base font-light text-gray-400 mt-12'>
          New to Netflix?{' '}
          <Link to="/login" className='font-semibold text-white hover:underline'>
            Sign in now.
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SignupPage