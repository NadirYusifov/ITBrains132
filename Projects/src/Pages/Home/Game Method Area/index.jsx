import React from 'react'
import '../Game Method Area/style.css'
import { GrGamepad } from 'react-icons/gr'
import { FaRegHandshake } from 'react-icons/fa'
import { BsShieldLock } from 'react-icons/bs'

function GameMethodArea() {
  return (
    <>
      {/* ========== Home Section 5 Start (Game Method Area) ==========  */}
      <div className='game-method-area'>
        <div className='container'>
          <div className='method-wrapper' data-aos="fade-up"
            data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='text-logo'>
                  <div className='method-logo'>
                    <span><GrGamepad /></span>
                  </div>
                  <h5>Amazing Game Choose</h5>
                  <p>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='text-logo'>
                  <div className='method-logo'>
                    <span><FaRegHandshake /></span>
                  </div>
                  <h5>Amazing Game Choose</h5>
                  <p>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='text-logo'>
                  <div className='method-logo'>
                    <span><BsShieldLock /></span>
                  </div>
                  <h5>Amazing Game Choose</h5>
                  <p>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Home Section 5 End (Game Method Area) ==========  */}
    </>
  )
}

export default GameMethodArea