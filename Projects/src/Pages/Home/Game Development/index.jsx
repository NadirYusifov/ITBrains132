import React from 'react'
import '../Game Development/style.css'
import { BsPhone } from 'react-icons/bs'
import { BsLaptop } from 'react-icons/bs'
import { SiPlaystation4 } from 'react-icons/si'
import { PiVirtualReality } from 'react-icons/pi'
import { FiArrowRight } from 'react-icons/fi'

function GamesDevelopment() {
    return (
        <>
            {/* ========== Home Section 4 Start (Game Development) ==========  */}
            <div className='overlay'>
                <div className='gamebackground-image'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center flex-wrap'>
                            <div className='game-content-first' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1000s.</p>
                            </div>
                            <div className='dev-logo-section col-md-10'>
                                <div className='row'>
                                    <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row' data-aos="zoom-in"
                                        data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                                        <div className='block-18 text-center'>
                                            <div className='text'>
                                                <div className='dev-logo'>
                                                    <span><BsPhone /></span>
                                                </div>
                                                <p>Mobile Game Development</p>
                                                <span className='text-arrow'><FiArrowRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row' data-aos="zoom-in"
                                        data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                                        <div className='block-18 text-center'>
                                            <div className='text'>
                                                <div className='dev-logo'>
                                                    <span><BsLaptop /></span>
                                                </div>
                                                <p>Mobile Game Development</p>
                                                <span className='text-arrow'><FiArrowRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row' data-aos="zoom-in"
                                        data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                                        <div className='block-18 text-center'>
                                            <div className='text'>
                                                <div className='dev-logo'>
                                                    <span><SiPlaystation4 /></span>
                                                </div>
                                                <p>Mobile Game Development</p>
                                                <span className='text-arrow'><FiArrowRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row' data-aos="zoom-in"
                                        data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                                        <div className='block-18 text-center'>
                                            <div className='text'>
                                                <div className='dev-logo'>
                                                    <span><PiVirtualReality /></span>
                                                </div>
                                                <p>Mobile Game Development</p>
                                                <span className='text-arrow'><FiArrowRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Home Section 4 End (Game Development)==========  */}
        </>
    )
}

export default GamesDevelopment