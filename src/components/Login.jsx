import Netflix_Logo_CMYK from '../assets/images/Netflix_Logo_CMYK.png'
import netflix_bg from '../assets/images/netflix_bg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Login = () => {
  const[email,SetEmail] = useState('');
  const[password,SetPassword] = useState('');
  const[error,SetError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    SetError('');

    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      navigate('/browse');
    }catch(err){
      console.error("Firebase Login Error", err.code, err.message);
      SetError('Invalid Email or Password. Please try again.')
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
          Login In
        </h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            placeholder='Email or phone number'
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            className='p-3 w-full rounded-sm text-white placeholder-gray-400 bg-gray-700/80 border border-gray-600 focus:border-white outline-none'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            className='p-3 w-full rounded-sm text-white placeholder-gray-400 bg-gray-700/80 border border-gray-600 focus:border-white outline-none'
          />
          <button className='p-3 w-full mt-6 rounded-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors'>
            Sign In
          </button>
        </form>

        {error && <p className="text-orange-500 mt-4">{error}</p>}

        <p className='text-base font-light text-gray-400 mt-12'>
          New to Netflix?{' '}
          <Link to="/" className='font-semibold text-white hover:underline'>
            Sign up now.
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Login;