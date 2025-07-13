import React from 'react'
import Navabar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import FaqItem from '../components/FaqItem'
import MoreReason from '../components/MoreReason'

function HomeScreen() {
  return (
    <div>
       <HeroSection />
       {/* <MoreReason /> */}
       <FaqItem />
       <Footer />
    </div>
  )
}

export default HomeScreen