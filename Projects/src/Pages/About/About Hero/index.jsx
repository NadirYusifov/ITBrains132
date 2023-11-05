import React from 'react'
import Person from '../../../Assets/question-people.png'
import { FaArrowRight } from "react-icons/fa"
import '../About Hero/style.css'

function AboutHero() {
  return (
    <>
      {/* ========== About Section 1 Start (About Hero) ========== */}
      <div className='about-hero'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-between'>
            <div className='col-xl-6 col-lg-6 col-md-8' data-aos="fade-right" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000">
              <div className='hero-about-caption'>
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and.
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className='hero-btn'>Get in touch <FaArrowRight /></button>
              </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-4' data-aos="fade-left" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000">
              <div className='hero-about-image'>
                <img src={Person} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== About Section End (About Hero) ========== */}
    </>
    // 
  )
}

export default AboutHero