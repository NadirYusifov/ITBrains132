import React, { useEffect, useState } from 'react'
import 'swiper/css';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import '../Games Slider/style.css'
import { Link } from 'react-router-dom';


function GameSlider() {

    // ========== Games Api ==========
    const [slider, setSlider] = useState([])

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=b9bc2788ba394d238eee7389bf54a97a')
            .then(res => res.json())
            .then(res => setSlider(res.results))
    }, [])
    
    return (
        <>
            {/* ========== Game Slider Section 1 Start ========== */}
            <div className='game-slider'>
                <div className='container'>
                    <div className='row'>
                        <div className='slider-trend'>
                            <h1>Today Trending Games</h1>
                        </div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Scrollbar, Autoplay]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true,
                                stopOnLastSlide: false,
                                waitForTransition: true
                            }}>
                            {slider.slice(0, 5).map(slide => {
                                return <SwiperSlide>
                                    <div className='slider-item'>
                                        <div className='slider-image'>
                                            <img src={slide.background_image}/>
                                        </div>
                                        <div className='slider-content'>
                                           <Link to={`/detail/${slide.slug}`}><h2>{slide?.name}</h2></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* ========== Games Slider Section 1 End ========== */}
        </>
    )
}

export default GameSlider