import React from 'react'
import './computing.css'
import Compute from '../../../data/computing.json'

function Computing() {

  return (
    <div className='Maindiv'>
        <p className='main-title'>Computing</p>
        <div className='innerdiv'>
            <img src={Compute[0].image}></img>
           <a href='#'>{Compute[0].title}</a>
           <a href='#'><p>{Compute[0].description}</p></a>
        </div>


        <div className='innerdiv'>
            <img src={Compute[1].image}></img>
           <a href='#'>{Compute[1].title}</a>
           <a href='#'><p>{Compute[1].description}</p></a>
        </div>


        <div className='rightdiv'>
            <div className='right-innerdiv'>
                <a href='#'>{Compute[2].title}</a>
                <a href='#'><p>{Compute[2].description}</p></a>
            </div>
            <div className='right-innerdiv'>
                <a href='#'>{Compute[3].title}</a>
                <a href='#'><p>{Compute[3].description}</p></a>
            </div>
            <div className='right-innerdiv'>
                <a href='#'>{Compute[4].title}</a>
                <a href='#'><p>{Compute[4].description}</p></a>
            </div>
        </div>

    </div>
  )
}

export default Computing;