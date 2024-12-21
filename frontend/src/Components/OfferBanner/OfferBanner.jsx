import React from 'react'
import './OfferBanner.css'
import CardSlider from '../Adcard/CardSlider'

const OfferBanner = () => {

  return (
    <div className='OfferBanner'>
      <div className="first-content" style={{margin:'0 3rem 0 11rem'}}>
        <h1 style={{fontSize:'45px',fontWeight:'600'}}>Top Offers</h1>
        </div>
      <div className="second-content" >
      {/* card slider starts here */}
      <CardSlider />
      </div>
    </div>
  )
}

export default OfferBanner
