import React from 'react'
import './mobile.css'
import Mobiles from '../../../data/mobile.json'

function Mobile() {

  return (
    <div className='Maindiv'>
        <p className='main-title'>Mobile</p>
        <div className='innerdiv'>
            <img src={Mobiles[0].image}></img>
           <a href='#'>{Mobiles[0].title}</a>
           <a href='#'><p>{Mobiles[0].description}</p></a>
        </div>


        <div className='innerdiv'>
            <img src={Mobiles[1].image}></img>
           <a href='#'>{Mobiles[1].title}</a>
           <a href='#'><p>{Mobiles[1].description}</p></a>
        </div>


        <div className='rightdiv'>
            <div className='right-innerdiv'>
                <a href='#'>{Mobiles[2].title}</a>
                <a href='#'><p>{Mobiles[2].description}</p></a>
            </div>
            <div className='right-innerdiv'>
                <a href='#'>{Mobiles[3].title}</a>
                <a href='#'><p>{Mobiles[3].description}</p></a>
            </div>
            <div className='right-innerdiv'>
                <a href='#'>{Mobiles[4].title}</a>
                <a href='#'><p>{Mobiles[4].description}</p></a>
            </div>
        </div>

    </div>
  )
}

export default Mobile;