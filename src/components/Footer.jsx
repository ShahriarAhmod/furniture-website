import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
const Footer = () => {
  return (
    <section className='footer'>
      <div className="product-categories">
        <span>Categories</span>
        <li>Home Decerator</li>
        <li>Office Decorator</li>
        <li>Kitchen Decorator</li>
        
        <li>Best Sales</li>
      </div>
      <div className="company">
        <span>Company</span>
        <li>About company</li>
        <li>Our Services</li>
        <li>Job Opportunities</li>
        <li>Contact us</li>
      </div>
      <div className="customer">
        <span>Customer</span>
        <li>Client Support</li>
        <li>Pricing Packages</li>
        <li>Company Story</li>
        <li>Latest News</li>
      </div>
      <form className="newsletter">
        <span>





          Subscribe to newsletter
        </span>
      
      <p>Enter your email address for receiving valuable newsletters.</p>
       

        <input type="email" placeholder='enter your email address' />
  

      
      </form>

    </section>
  )
}

export default Footer