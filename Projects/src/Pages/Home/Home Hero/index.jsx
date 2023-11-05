import React from 'react'
import '../Home Hero/style.css'
import joystick from '../../../Assets/joy_stick 1.png'

function HomeHero() {
  return (
    <>
    {/* ========== Home Section 1 Start (Home Hero) ==========  */}
      <div className='hero-area'>
        <div className='container'>
          <div className='row d-flex justify-content-around align-items-end'>
            <div className='col-xl-6 col-lg-6 col-md-8' data-aos="fade-right" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000" data-aos-anchor="#example-anchor">
              <div className='hero-caption'>
                <h1>
                  Work that we produce for our clients
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>
                <button className='hero-btn'>Get more details</button>
              </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-4' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000">
              <div className='hero-image'>
                <img src={joystick} />
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Home Section 1 End (Home Hero) ==========  */}
    </>
  )
}

export default HomeHero