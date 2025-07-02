import React from 'react'
import { Link } from 'react-router-dom';
import netflix_bg from '../assets/images/netflix_bg.jpg'; 
import Netflix_Logo_CMYK from '../assets/images/Netflix_Logo_CMYK.png'

function Login() {
  return (
    <>
      <div className="relative hidden lg:block h-screen">
              <img
                src={netflix_bg}
                alt="Movies and TV shows background"
                className="absolute top-0 left-0 h-full w-full object-cover z-0"
              />
        </div>
        <div className="absolute top-0 left-0 h-screen w-full bg-black sm:bg-black/60 sm:bg-gradient-to-t from-black/80 via-transparent to-black/80 z-10" >
          <Link to='/'>
            <img
              src={Netflix_Logo_CMYK}
              alt='netflix-logo'
              className='w-24 md:w-36 lg:w-44 ml-2 mt-4 sm:p-2 '
            />
          </Link>
        </div>
        <div className='absolute block sm:hidden z-10 top-20 left-4 text-white text-2xl font-bold'>
          <div className='mr-4'>
            <h1>Sign In</h1>
            <input
              placeholder='Enter Your Email'
              className='border p-3 w-full mt-5 rounded-sm font-extralight  placeholder-gray-400 focus:border-white outline-none'
            />
            <input
              type='Password'
              placeholder='Password'
              className='border p-3 w-full mt-5 rounded-sm font-extralight placeholder-gray-400 focus:border-white outline-none'
            />
            <button className='border p-3 w-full mt-5 rounded-sm font-extrabold  text-white bg-red-600'>
              Sign In
            </button>
            <p className='text-xl font-light text-gray-300 mt-10'>New to Netflix?<b className='font-extrabold'><Link to="/">Sign up now.</Link></b></p>
          </div>
        </div>
        <div className='absolute hidden lg:block w-[250px] h-[500px] top-50 left-15  bg-indigo-600 bg-opacity-25 z-10'>

        </div>
    </>
  )
}

export default Login