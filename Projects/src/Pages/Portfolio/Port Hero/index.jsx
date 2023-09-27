import React from 'react'
import "../Port Hero/style.css"
import { BsPersonFill } from 'react-icons/bs'
import { BiSolidMap } from 'react-icons/bi'
import { BsWindow } from 'react-icons/bs'
import CountUp from 'react-countup'

function PortHero() {
    return (
        <div className='hero_section_1'>
            <div className='container'>
                <div className='row'>
                    <div className='hero_section_text'>
                        <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='hero-number-counter'>
                        <div className='row d-flex align-items-center'>
                            <div className='clients-section col-xl-4 col-lg-4 col-md-4 col-sm-12 d-lg-flex align-items-center'>
                                <div className='clients-icon'>
                                    <span><BsPersonFill /></span>
                                </div>
                                <div className='number-counter'>
                                <h4>
                                    <CountUp start={0} end={500} duration={2} delay={0}/>+
                                </h4>
                                <p>Clients</p>
                                </div>
                                <div className='hero-stick'>
                                    <span>|</span>
                                </div>
                            </div>

                            <div className='clients-section col-xl-4 col-lg-4 col-md-4 col-sm-12 d-lg-flex align-items-center'>
                                <div className='clients-icon'>
                                    <span><BiSolidMap/></span>
                                </div>
                                <div className='number-counter'>
                                <h4>
                                    <CountUp start={0} end={30} duration={2} delay={0}/>+
                                </h4>
                                <p>Countries</p>
                                </div>
                                <div className='hero-stick'>
                                    <span>|</span>
                                </div>
                            </div>

                            <div className='clients-section col-xl-4 col-lg-4 col-md-4 col-sm-12 d-lg-flex align-items-center'>
                                <div className='clients-icon'>
                                    <span><BsWindow/></span>
                                </div>
                                <div className='number-counter'>
                                <h4>
                                    <CountUp start={0} end={50} duration={2} delay={0}/>+
                                </h4>
                                <p>Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortHero