import React from 'react'
import './news.css'

function News() {
  return (
  <div class="container">
    <div className='container-left'>
      <img src="https://i.ibb.co/NrdzHCY/samsung.jpg"></img>
      <a href='#'><p>Epic Galaxy S23 Deal at Samsung Makes the New Phones Free for a Limited Time</p></a>
      <a href='#'>To take full advantage of this offer, you'll need a recent model phone to trade in.</a>
    </div>

    <div className='container-right'>
      <div className='top'>
        <div className='top-content'>
          <a href='#'>Watch Super Bowl 2023 Today for Free Online: Start Time, TV Network and Streaming</a>
          <a href='#'><p>The Super Bowl kicks off at 6:30 p.m. ET. Here's how you can stream it from anywhere in the world.</p></a>
        </div>

        <div className='top-image'>
         <img src="https://i.ibb.co/9rBZSpf/redzone.jpg"></img>
        </div>

      </div>

      <div className='bottom'>
      <div className='top-content'>
          <a href='#'>Microsoft's AI-Boosted Bing Can Run Rings Around Google Search</a>
          <a href='#'><p>I liked Bing's answers better for eight of 10 tough questions.</p></a>
        </div>

        <div className='top-image'>
        <img src="https://i.ibb.co/SJBrz6W/laptop.jpg"></img>
        </div>
      </div>
   </div>
  </div>
  
  )
}

export default News



