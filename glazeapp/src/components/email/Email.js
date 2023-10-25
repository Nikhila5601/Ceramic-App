import React from 'react'
import "./email.css";
const Email = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle"> Subscribe to Our Exquisite Ceramic Newsletter  </h1>
        <span className="mailDesc">Sign up and we'll send you updates</span>
        <div className="mailInputContainer">
            <input type="text" name="" id="" placeholder='Your Mail ID' />
            <button className="button-7 mailButton ">Subscribe</button>
        </div>
    
    </div>
  )
}

export default Email