import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; T-Works Foundation Corporate Office</p>
        <p>Plot 1/D, 1/E, 1/F,Survey No. 83/1, Raidurgam, Ranga Reddy District,</p>
        <p>Hyderabad 500081, India.</p>

        <p><a className="footer-link" href="https://www.tworks.in" target="_blank" rel="noopener noreferrer">T-Works</a></p> {/* Add your company's website with a link */}
      </div>
   </div>
  )
}

export default Footer