import React from 'react'
import Navbar1 from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import OfferBanner from '../Components/OfferBanner/OfferBanner'
import Footer from '../Components/Footer/Footer'
import DisplayAds from '../Components/DisplayAds/DisplayAds'

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Hero />
      <OfferBanner />
      <DisplayAds />
      <Footer />
    </div>
  )
}

export default Home
