import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

// ========== Swiper js ==========
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// ========== Video React ==========
import { BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";

// ========== Day.js ==========
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

// ========== React Icons ==========
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineCode } from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import { RiComputerLine } from 'react-icons/ri'
import { TbSwords } from 'react-icons/tb'

// ========== Metacritic Color ==========
import { setMetaCriticColor } from '../../../Components/Utils/setMetaCriticColor';

// ========== Style.css ==========
import '../Detail Games Hero/style.css'

function DetailGamesHero() {

    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setDetail(res))
    }, [])

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setPicture(res))
    }, [])

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/movies?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setMovie(res))
    }, [])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [detail, setDetail] = useState([])
    const [picture, setPicture] = useState([])
    const [movie, setMovie] = useState([])
    const { id } = useParams()

    // ========== Day.js ==========
    dayjs.extend(relativeTime)
    const releasedDate = `${dayjs(detail.released).format('DD MMMM YYYY')} (${dayjs(detail.released).fromNow('yy')})`;

  return (
    <>
        <div className='games-detail'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6'>

                            <div className='game-detail-image'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {movie?.results?.map(item =>
                                        <SwiperSlide>
                                            <Player
                                                playsInline="true"
                                                src={item?.data?.max}
                                                poster={item?.preview}
                                                preload='metadata'
                                                muted='true'
                                            >
                                                <BigPlayButton position='center' />
                                            </Player>

                                        </SwiperSlide>

                                    )}

                                    <SwiperSlide>
                                        <img src={detail.background_image} />
                                    </SwiperSlide>

                                    {picture?.results?.map(item => (

                                        <SwiperSlide key={item?.id}>
                                            <img src={item?.image} alt={item?.id} />
                                        </SwiperSlide>

                                    ))}
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >

                                    {movie?.results?.map(item =>
                                        <SwiperSlide>
                                            <Player
                                                playsInline="true"
                                                src={item?.preview}

                                                preload='metadata'
                                                muted='true'
                                            >
                                                <BigPlayButton position='center' />
                                            </Player>
                                        </SwiperSlide>

                                    )}


                                    <SwiperSlide>
                                        <img src={detail.background_image} />
                                    </SwiperSlide>
                                    {picture?.results?.map(item => (

                                        <SwiperSlide key={item?.id}>
                                            <img src={item?.image} alt={item?.id} />
                                        </SwiperSlide>

                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6'>
                            <div className='detail-games-header d-flex justify-content-between align-items-center'>
                                <div className='detail-games-name'>
                                    <h1>{detail.name}</h1>
                                </div>
                                <div className='detail-games-score'>
                                    <abbr title='Metacritic'>
                                        <span className={`${setMetaCriticColor(detail.metacritic)}`}>
                                            {!!detail.metacritic ? detail.metacritic : 0}
                                        </span>
                                    </abbr>
                                </div>
                            </div>

                            <div className='detail-games-orginal'>
                                <p>{detail.alternative_names}</p>
                            </div>
                            <div className='detail-game-hours'>
                                <p>Average Playtime: {detail.playtime} Hours</p>
                                <hr />
                            </div>
                            <div className='detail-games-item'>
                                <div className='detail-games-released d-flex align-items-center'>
                                    <p><span><AiOutlineClockCircle /></span> Released at: {releasedDate}</p>
                                </div>
                                <div className='detail-games-developers'>
                                    <p><span><HiOutlineCode /></span> Developers: {detail?.developers?.map((item, index) =>
                                        <Link to={`/developers/${item.slug}`}>
                                            {!!index && ', '}
                                            {item.name}
                                        </Link>
                                    )}</p>
                                </div>
                                <div className='detail-games-publisher d-flex flex-wrap'>
                                    <p><span><TbWorld /></span> Publishers</p>
                                    {detail?.publishers?.map((item, index) =>
                                        <Link to={`/publisher/${item.slug}`}>
                                            {index !== 0 && ', '}
                                            {index == 0 && ': '}
                                            {item.name}
                                        </Link>
                                    )}
                                    {/* <Link to={`/publisher/${detail.id}`}>{publisher}</Link> */}
                                </div>
                                <div className='detail-games-platforms d-flex flex-wrap'>
                                    <p><span><RiComputerLine /></span> Platforms</p>
                                    {detail?.platforms?.map((item, index) => (
                                        <p>
                                            {index !== 0 && ', '}
                                            {index == 0 && ': '}
                                            {item.platform.name}
                                        </p>
                                    ))}
                                </div>
                                <div className='detail-games-genres d-flex flex-wrap'>
                                    <p><span><TbSwords /></span> Genres</p>
                                    {detail?.genres?.map((item, index) =>
                                        <p>
                                            {index !== 0 && ', '}
                                            {index == 0 && ': '}

                                            {item.name}
                                        </p>
                                    )}
                                </div>
                                <div className='detail-games-website'>
                                    <a href={detail.website} target='_blank'><button>Website Visit</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default DetailGamesHero