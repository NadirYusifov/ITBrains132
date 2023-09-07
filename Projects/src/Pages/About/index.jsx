import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import "../About/style.css"
import Person from "../../Assets/businessman.png"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function About() {
    return (
        <div style={{background: "linear-gradient(177deg, #3B2A9F 43.02%, rgba(47, 69, 182, 0.44) 84.17%, rgba(114, 138, 185, 0.23) 100%)"}}>
            <Header />
            <div className='hero-main'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-between'>
            <div className='col-xl-6 col-lg-6 col-md-8'>
              <div className='hero-about-caption'>
                <h1>
                Lorem Ipsum is simply dummy text of the printing and.
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className='hero-btn'>Get in touch <FaArrowRight/></button>
              </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-4'>
              <div className='hero-about-image'>
                <img src={Person} />
              </div>
            </div>
          </div>
        </div>
      </div>
            <Footer />
        </div>
    )
}

export default About