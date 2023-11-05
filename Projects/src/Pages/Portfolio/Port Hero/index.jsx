import React from 'react'
import "../Port Hero/style.css"
import { BsPersonFill } from 'react-icons/bs'
import { BiSolidMap } from 'react-icons/bi'
import { BsWindow } from 'react-icons/bs'
import CountUp from 'react-countup'

function PortHero() {
    return (
        <>
            {/* ========== Portfolio Section 1 Start (Portfolio Hero) ========== */}
            <div className='hero_section_1'>
                <div className='container'>
                    <div className='row'>
                        <div className='hero_section_text' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                            <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className='hero-number-counter'>
                            <div className='row d-flex align-items-center'>
                                <div className='clients-section col-xl-4 col-lg-4 col-md-4 col-sm-12 d-xl-flex align-items-center'>
                                    <div className='clients-icon'>
                                        <span><BsPersonFill /></span>
                                    </div>
                                    <div className='number-counter'>
                                        <h4>
                                            <CountUp start={0} end={500} duration={2} delay={0} />+
                                        </h4>
                                        <p>Clients</p>
                                    </div>
                                    <div className='hero-stick'>
                                        <span>|</span>
                                    </div>
                                </div>

                                <div className='clients-section col-xl-4 col-lg-4 col-md-4 col-sm-12 d-xl-flex align-items-center'>
                                    <div className='clients-icon'>
                                        <span><BiSolidMap /></span>
                                    </div>
                                    <div className='number-counter'>
                                        <h4>
                                            <CountUp start={0} end={30} duration={2} delay={0} />+
                                        </h4>
                                        <p>Countries</p>
                                    </div>
                                    <div className='hero-stick'>
                                        <span>|</span>
                                    </div>
                                </div>

                                <div className='clients-section col-xl-4 col-lg-4 col-md-4 col-sm-12 d-xl-flex align-items-center'>
                                    <div className='clients-icon'>
                                        <span><BsWindow /></span>
                                    </div>
                                    <div className='number-counter'>
                                        <h4>
                                            <CountUp start={0} end={50} duration={2} delay={0} />+
                                        </h4>
                                        <p>Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Portfolio Section 1 End (Portfolio Hero) ========== */}
        </>
    )
}

export default PortHero