import React, { useEffect, useState }  from 'react'
import './latest.css'
import Latestt from '../../../data/latest.json'

function Latest() {

  const [data, setdata] = useState([]);
  
  useEffect(() => {
    setdata(Latestt);
  }, []);

  return (
    <div className='Main'>
         <p className='main-title'>Latest</p>

         {
          data.map((item)=>{
            return(
              <>
              <div className='left'>
              <a href='#'>{item.title}</a>
                <a href='#'><p>{item.description}</p></a>
              </div>
              
              <div className='right'>
               <img src={item.image}></img>
              </div>
              </>
            )
          })
         }
           
    </div>
  )
}

export default Latest