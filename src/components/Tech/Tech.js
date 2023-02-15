import React from 'react'
import Header from '../header/header'
import News from '../categorys/news/news'
import Crousel from '../categorys/crousal/crousel'
import Techdeals from '../categorys/techdeals/Techdeals'
import Mobile from '../categorys/mobile/mobile'
import Latest from '../categorys/latest/Latest'
import Computing from '../categorys/computing/Computing'
import Footer from '../footer/Footer'


function Tech() {
  return (
    <div>
        <Header/>
        <News/>
        <Crousel/>
        <Techdeals/>
        <Mobile/>
        <Computing/>
        <Latest/>
        <Footer/>
    </div>
  )
}

export default Tech