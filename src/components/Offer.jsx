import React from 'react'


import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'


const Offer = () => {
  return (
    <section className='offer'>
   <div className="offer-container">
   <div className="offer-card">
            <img src={banner1} alt="" />
           <div className="banner-info">
           <p>-FLAT 50% OFF</p>
            <h2>Wooden
<span>armchair</span></h2>
<a href="">Discover Now</a>
           </div>
          </div>
          <div className="offer-card">
            <img src={banner2} alt="" />
           <div className="banner-info">
           <p>-FLAT 50% OFF</p>
            <h2>Wooden
<span>armchair</span></h2>
<a href="">Discover Now</a>
           </div>
          </div>
   </div>
    </section>
  )
}

export default Offer