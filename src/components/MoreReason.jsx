import React from 'react'
import { FaTv } from "react-icons/fa";

function MoreReason() {
  return (
    <div className='bg-black w-full flex justify-evenly text-gray-900 '>
        <div className='bg-gradient-to-r from-[#2b3a8d] to-[#c81d25] w-60 rounded-2xl '>
            <h1 className='font-extrabold text-2xl p-4'>Enjoy Your Tv</h1>
            <p className='ml-4'>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,<br />Blu-ray players and more.
            </p>
            <FaTv className='size-40 p-10'/>
        </div>

        <div className='bg-gradient-to-r from-[#2b3a8d] to-[#c81d25]  w-60 rounded-2xl'>
            <h1 className='font-extrabold text-2xl p-4'>Download your shows to watch offline</h1>
            <p className='ml-4'>
                Save your favourites easily<br /> and always have something<br /> to watch.
            </p>
            <FaTv className='size-40 p-10'/>
        </div>

        <div className='bg-gradient-to-r from-[#2b3a8d] to-[#c81d25] w-60 rounded-2xl p-3'>
            <h1 className='font-extrabold text-2xl'>Watch everywhere</h1>
            <p className='mt-4'>
                Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
            </p>
            <FaTv className='size-40 p-10'/>
        </div>

        <div className='bg-gradient-to-r from-[#2b3a8d] to-[#c81d25] w-60 rounded-2xl p-3'>
            <h1 className='font-extrabold text-2xl ml-1'>Create profiles for kids</h1>
            <p className='ml-2'>
                Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
            </p>
            <FaTv className='size-40 p-10'/>
        </div>
        
    </div>
  )
}

export default MoreReason