import React, {useState} from 'react';
import Navbar from './Navbar';
import netflix_bg from '../assets/images/netflix_bg.jpg'; 
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

function HeroSection() {
  const[email,setEmail] = useState('');
  const navigate =useNavigate();

  const handlegetstarted = async (e) => {
    e.preventDefault();
    const sanitizedEmail = email.trim().toLowerCase();
  
    if (!sanitizedEmail) {
      alert("Please enter your email address.");
      return;
    }
  
    try {
      const methods = await fetchSignInMethodsForEmail(auth, sanitizedEmail);
      if (methods.length > 0) {
        navigate('/login', { state: { email: sanitizedEmail } });
      } else {
        navigate('/signup', { state: { email: sanitizedEmail } });
      }
    } catch (error) {
      console.error("Error checking email with firebase", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative h-screen bg-black">
        <img
          src={netflix_bg}
          alt="Movies and TV shows background"
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        />
      <div className="absolute top-0 left-0 h-full w-full bg-black/60 bg-gradient-to-t from-black/80 via-transparent to-black/80 z-10" />
      <Navbar />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl font-extrabold md:text-5xl lg:text-6xl">
          Unlimited movies, TV <br /> shows, and more
        </h1>
        <h3 className=" font-bold mt-4 text-lg md:text-2xl">
         Starts at ₹149. Cancel at any time.
        </h3>
        <p className='mt-7 font-medium md:text-xl'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      <form 
       onSubmit={handlegetstarted} 
       className='flex flex-col gap-3 sm:flex-row md:flex-row lg:flex-row'>
        <input
         type='email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className='p-3 bg-transparent sm:pr-75  mt-5 text-lg text-start outline-neutral-50 border rounded-sm'
         placeholder='Enter Your Email'
        />
          <button
            type='submit'
            className='bg-red-500 flex justify-center py-3 mx-10 mt-5 text-xl sm:p-3 sm:mx-0 rounded-sm '
          >Get Started {`>`}
          </button>
      </form>
      </div>
    </div>
  );
}

export default HeroSection;