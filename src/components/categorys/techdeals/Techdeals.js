import React, { useState } from 'react'
import './techdeals.css'
import Techdeal from '../../../data/techdeals.json'

function Techdeals() {

  return (
    <div className='Maindiv'>
        <p className='main-title'>Tech Deals</p>
        <div className='innerdiv'>
            <img src={Techdeal[0].image}></img>
           <a href='#'>{Techdeal[0].title}</a>
           <a href='#'><p>{Techdeal[0].description}</p></a>
        </div>


        <div className='innerdiv'>
            <img src={Techdeal[1].image}></img>
           <a href='#'>{Techdeal[1].title}</a>
           <a href='#'><p>{Techdeal[1].description}</p></a>
        </div>


        <div className='rightdiv'>
            <div className='right-innerdiv'>
                <a href='#'>{Techdeal[2].title}</a>
                <a href='#'><p>{Techdeal[2].description}</p></a>
            </div>
            <div className='right-innerdiv'>
                <a href='#'>{Techdeal[3].title}</a>
                <a href='#'><p>{Techdeal[3].description}</p></a>
            </div>
            <div className='right-innerdiv'>
                <a href='#'>{Techdeal[4].title}</a>
                <a href='#'><p>{Techdeal[4].description}</p></a>
            </div>
        </div>

    </div>
  )
}

export default Techdeals