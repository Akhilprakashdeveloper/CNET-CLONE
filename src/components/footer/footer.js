import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='mainDiv'>
    <div className='innerDiv'>
     <a ><h5>More From CNET</h5></a> 
     <a href='#'><p>Deals</p></a>
     <a href='#'><p>Reviews</p></a>
     <a href='#'><p>Best Products</p></a>
     <a href='#'><p>Gift Guide</p></a>
     <a href='#'><p>Shopping Extension</p></a>
     <a href='#'><p>Videos</p></a>
    </div>
    

    <div className='innerDiv'>
    <a><h5>About</h5></a>
    <a href='#'><p>About CNETt</p></a>
     <a href='#'><p>Newsletter</p></a>
     <a href='#'><p>Sitemap</p></a>
     <a href='#'><p>Careers</p></a>
    </div>

    <div className='innerDiv'>
     <a><h5>Policies</h5></a>
     <a href='#'><p>Help Center</p></a>
     <a href='#'><p>Privacy Policy</p></a>
     <a href='#'><p>Cookie Settings</p></a>
     
    </div>

    <div className='innerDiv'>
    <a href='#'><p>Terms of Use</p></a>
     <a href='#'><p>Licensing</p></a>
     <a href='#'><p>Do Not Sell or Share My Personal Information</p></a>
    </div>

 </div>
  )
}

export default Footer