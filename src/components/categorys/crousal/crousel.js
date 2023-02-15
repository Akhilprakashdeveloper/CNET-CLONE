import React, { useEffect, useState } from 'react'
import './crousel.css'
import crousaldata from '../../../data/crousal.json'

function Crousel() {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    setdata(crousaldata);
  }, []);

  return (
    <div className="container">
      <div className="row flex-nowrap overflow-auto">
        {data.map((item, index) => (
          <div key={index} className="col-md-3 custom-div">
            <img src={item.image} alt={item.title} />
            <a href='#'><p>{item.title}</p></a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crousel
