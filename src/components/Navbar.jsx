import Netflix_Logo_CMYK from '../assets/images/Netflix_Logo_CMYK.png'
import netflix_bg from '../assets/images/netflix_bg.jpg'
import { MdPerson } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className='absolute z-50 top-4 left-0 flex w-full items-center justify-between pr-4 pl-2 sm:p-2 md:px-8 lg:px-12 font-[Helvetica]'>
          <Link to='/'>
            <img
              src={Netflix_Logo_CMYK}
              alt='netflix-logo'
              className='w-24 md:w-36 lg:w-44'
            />
          </Link>
          <div className='flex items-center gap-2 md:gap-4'>
              <select 
                id='languages' 
                className='rounded border border-gray-500 bg-black/50 text-sm text-white py-1 sm:  md:py-2 md:px-4 md:text-base'>
                  <option className='bg-gray-700' value="us">English</option>
                  <option className='bg-gray-700' value="uk">Hindi</option>
              </select>
              <Link to="/login">
                <button
                  className='rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-red-700 md:px-5 md:py-2 md:text-base cursor-pointer'>Sign In
                </button>
              </Link>
          </div>
      </nav>
    </>
  )
}

export default Navbar