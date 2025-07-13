import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-black text-white w-full'>
        <nav className='grid grid-row sm:grid-cols-3 text- underline pb-5 ml-7'>
            <ul className='grid grid-rows-3 sm:ml-40 gap-3 mt-4 sm:mt-15'>
                <li><Link>FAQ</Link></li>
                <li><Link>Investor Relations</Link></li>
                <li><Link>Privacy</Link></li>
                <li><Link>Speed Test</Link></li>
            </ul >
            <ul className='grid grid-rows-3 sm:ml-40 gap-3 mt-4 sm:mt-15 '>
                <li><Link>Help</Link></li>
                <li><Link>Jobs</Link></li>
                <li><Link>Cookie Prefrences</Link></li>
                <li><Link>Legal Notice</Link></li>
            </ul>
            <ul className='grid grid-rows-3 sm:ml-40 gap-3 mt-4 sm:mt-15 '>
                <li><Link>Terms of Use</Link></li>
                <li><Link>Corprate Information</Link></li>
                <li><Link>Media Center</Link></li>
                <li><Link>Contact Us</Link></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer