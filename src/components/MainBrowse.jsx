import React from 'react'
import { Link } from 'react-router-dom'
import Netflix_Logo_CMYK from '../assets/images/Netflix_Logo_CMYK.png'

function MainBrowse() {
  return (
    <div className="relative h-screen w-full bg-black flex justify-center items-center">
          <div className="hidden sm:block absolute top-0 left-0 h-full w-full bg-black z-10" />
    
          <header className="absolute top-0 left-0 z-20 flex flex-row p-4 sm:p-6 text-white text-2xl">
            <Link to='/browse'>
              <img
                src={Netflix_Logo_CMYK}
                alt='netflix-logo'
                className='w-28 sm:w-36 md:w-44'
              />
            </Link>
            <Link>
            Trending
            </Link>
          </header>
    </div>
  )
}

export default MainBrowse