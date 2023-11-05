import React, { useEffect, useState } from 'react'
// import {BsSearch} from 'react-icons/bs'
import '../News Hero/style.css'

function NewsHero() {
  return (
    <>
    {/* ========== News Section 1 Start (News Hero) ========== */}
    <div className='news-hero-section'>
        <div className='container'>
            <div className='row'>
                <div className='news-hero-content' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                    <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                {/* <div className='news-hero-search'>
                    <input type='text' name='search' id='search' placeholder='Search' onChange={searchPost}/>
                    <span><BsSearch/></span>
                </div> */}
            </div>
        </div>
    </div>
    {/* ========== News Section 1 End (News Hero) ========== */}
    </>
  )
}

export default NewsHero