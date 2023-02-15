import React, { useState } from 'react';
import './header.css';
import DropdownMenu from './Dropdown';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const data='https://amazonapi.onrender.com/products';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [linkText, setLinkText] = useState('More');
  const [icon, setIcon] = useState(<FaAngleDown />);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setLinkText(isOpen ? 'More' : 'Close');
    setIcon(isOpen ? <FaAngleDown /> : <FaAngleUp />);
  };


  return (
    <div>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id='brand'>CNET</a>
          <span className="navbar-text">Your guide to a better future</span>
          <ul className="navbar-nav ms-auto d-flex flex-wrap">
            <li className="nav-item">
              <a className="nav-link" href="#">Tech</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Money</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Wellness</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News & Culture</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Deals & Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Price Finder</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={toggleDropdown}>
                {linkText} {icon}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && <DropdownMenu />}

  <div class="container-fluid" style={{marginTop:'3%'}}>
  <div class="row">
    <div class="col-12 text-start">
      <h2 style={{fontSize:"50px",fontWeight:'600',fontFamily: 'Sentinel,serif'}}>Get the tech that takes you places</h2>
      <p style={{fontWeight:'430',fontSize:'20px'}}>Our experts share the newest products and technologies that get you the most out of your world.</p>
      <div class="d-flex justify-content-start" style={{marginTop:'3%',borderBottom:'1px solid #dadada',paddingBottom:'1%'}}>
        <a href="#" class="me-3" style={{textDecoration:"underline 2px solid red",color:'red', textDecorationSkipInk:'auto',textUnderlinePosition:'under'}}>Tech</a>
        <a href="#" class="me-3">Home Entertainment</a>
        <a href="#" class="me-3">Mobile</a>
        <a href="#" class="me-3">Computing</a>
        <a href="#" class="me-3">Services &amp; Software</a>
        <a href="#" class="me-3">Gaming</a>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Header;
