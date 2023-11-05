import React from 'react'
import '../Contact Hero/style.css'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiPhonePlus } from 'react-icons/pi'
import { BiSolidMap } from 'react-icons/bi'
import Map from '../../../Assets/contact-map.png'


function ContactHero() {
    return (
        <>
            {/* ========== Contact Sectin 1 Start (Contact Hero) ========== */}

            {/* ========== Contact Hero Text Start ========== */}
            <div className='contact-section' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <div className='container'>
                    <div className='row'>
                        <div className='text-contact'>
                            <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Contact Hero Text End ========== */}


            {/* ========== Contact Hero Map Start ========== */}
            <div className='contact-map' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <div className='container'>
                    <div className='row'>
                        <div className='contact-map-image'>
                            <img src={Map} />
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Contact Hero Map End ========== */}


            {/* ========== Contact Hero Social Media Links Start ========== */}
            <div className='contact-info' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                            <div className='contact-social'>
                                <ul className='follow-us d-flex'>
                                    <li><a href='https://www.facebook.com/'><FaFacebookF color='white' /></a></li>
                                    <li><a href='https://www.instagram.com/'><FaInstagram color='white' /></a></li>
                                    <li><a href='https://twitter.com/'><FaTwitter color='white' /></a></li>
                                    <li><a href='https://www.linkedin.com/'><FaLinkedinIn color='white' /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* ========== Contact Hero Social Media Links End ========== */}


                        {/* ========== Contact Hero Phone Start ========== */}
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                            <div className='contact-phone'>
                                <span><PiPhonePlus /> <a href='tel:+94 4444 5555 6'>+94 4444 5555 6</a></span>
                            </div>
                        </div>
                        {/* ========== Contact Hero Phone End ========== */}


                        {/* ========== Contact Hero Location Start ========== */}
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex'>
                            <div className='contact-location'>
                                <span><BiSolidMap /></span>
                                <p>8th floor, 379 Hudson St, New York, NY 10018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Contact Hero Location End ========== */}

            {/* ========== Contact Section 1 End (Contact Hero) ========== */}
        </>
    )
}

export default ContactHero