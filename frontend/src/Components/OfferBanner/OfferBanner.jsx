import React from 'react'
import './OfferBanner.css'
import CardSlider from '../Adcard/CardSlider'

const OfferBanner = () => {

  return (
    <div className='OfferBanner'>
      <div className="first-content">
        <h1 style={{fontFamily:"serif"}}>Top Offers</h1>
        </div>
      <div className="second-content" >
      {/* card slider starts here */}
      <CardSlider />
      </div>
    </div>
  )
}

export default OfferBanner
