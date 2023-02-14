import React from 'react'
import './header.css'

function Header() {
  return (
    <nav class="navbar navbar-expand navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id='brand'>CNET</a>
        <span class="navbar-text">Your guide to a better future</span>
        <ul class="navbar-nav ms-auto d-flex flex-wrap">
          <li class="nav-item">
            <a class="nav-link" href="#">Tech</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Money</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Wellness</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News & Culture</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Science</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Deals & Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Price Finder</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">More</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
