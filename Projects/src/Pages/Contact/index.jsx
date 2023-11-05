import React from 'react'
import ContactHero from './Contact Hero'
import Feedback from './Contact Feedback'
import Subscribe from '../../Components/Subscribe'

function Contact() {
  return (
    <div style={{background: "linear-gradient(176deg, #2211E7 -26.24%, #383837 96.98%)"}}>
        <ContactHero/>
        <Feedback/>
        <Subscribe/>
    </div>
  )
}

export default Contact