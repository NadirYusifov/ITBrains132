import React, { useEffect, useState } from 'react'
import 'swiper/css';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import '../Games Slider/style.css'


function GameSlider() {

    // ========== Games Api ==========
    const [slider, setSlider] = useState([])

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30&page_size=40')
            .then(res => res.json())
            .then(res => setSlider(res.results))
    }, [])

    console.log(slider);

    
    return (
        <>
            {/* ========== Game Slider Section Start ========== */}
            <div className='game-slider'>
                <div className='container'>
                    <div className='row'>
                        <div className='slider-trend'>
                            <h3>Today Trending Games</h3>
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
                                            <h2>{slide?.name}</h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* ========== Games Slider Section End ========== */}
        </>
    )
}

export default GameSlider