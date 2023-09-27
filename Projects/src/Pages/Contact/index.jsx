import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ContactHero from './Contact Hero'
import Feedback from './Contact Feedback'
import Subscribe from '../../Components/Subscribe'

function Contact() {
  return (
    <div style={{background: "linear-gradient(176deg, #2211E7 -26.24%, #383837 96.98%)"}}>
        <Header/>
        <ContactHero/>
        <Feedback/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Contact