import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ControlBar, PlayToggle, Player } from 'video-react';
import { BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../Detail Games/style.css'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineCode } from 'react-icons/hi'
import {TbWorld} from 'react-icons/tb'
import {RiComputerLine} from 'react-icons/ri'
import {TbSwords} from 'react-icons/tb'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { setMetaCriticColor } from '../../Components/Utils/setMetaCriticColor';
import BreadCrumbs from '../../Components/Bread Crumbs';
import DetailGameTab from './Detail Games Tabs';

import ShowMoreText from "react-show-more-text";
import DetailLikeGames from './Detail Like Games';

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';


const DetailGames = () => {

    // const [value, setValue] = React.useState('one');

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };


    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [detail, setDetail] = useState([])
    const [picture, setPicture] = useState([])
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    dayjs.extend(relativeTime)
    const releasedDate = `${dayjs(detail.released).format('DD MMMM YYYY')} (${dayjs(detail.released).fromNow('yy')})`;

    let developer = detail?.developers?.map(developers => developers.name)
    // let platform = detail?.platforms?.map(platforms => platforms.platform.name)
    // console.log(platform);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
            .then(res => res.json())
            .then(res => setDetail(res))
        // .then(res => console.log(res))
    }, [])

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
            .then(res => res.json())
            .then(res => setPicture(res))
        // .then(res => console.log(res))
    }, [])

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/movies?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
            .then(res => res.json())
            .then(res => setMovie(res))
        // .then(res => console.log(res))
    }, [])


    console.log(detail);
    console.log(movie);

    // detail.map((item) => (
    //     console.log(item)
    // ))


    return (
        <div style={{ backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)" }}>
            <BreadCrumbs />
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
                            <div className='detail-game-header d-flex justify-content-between align-items-end'>
                                <div className='detail-game-name'>
                                    <h1>{detail.name}</h1>
                                </div>
                                <div className='detail-game-score'>
                                    <abbr title='Metacritic'>
                                        <span className={`${setMetaCriticColor(detail.metacritic)}`}>
                                            {!!detail.metacritic ? detail.metacritic : 0}
                                        </span>
                                    </abbr>

                                </div>
                            </div>
                            <div className='detail-games-orginal'>
                                <p>{detail.alternative_names}</p>
                                <hr />
                            </div>
                            <div className='detail-game-item'>
                                <div className='detail-game-released d-flex align-items-center'>
                                    <p><span><AiOutlineClockCircle/></span> Released at: {releasedDate}</p>
                                </div>
                                <div className='detail-games-developers'>
                                    <p><span><HiOutlineCode /></span> Developers: {developer}</p>
                                </div>
                                <div className='detail-game-publisher d-flex flex-wrap'>
                                    <p><span><TbWorld/></span> Publishers</p>
                                    {detail?.publishers?.map((item, index) =>
                                        <Link to={`/publisher/${item.slug}`}>
                                            {index !== 0 && ', '}
                                            {index == 0 && ': '}
                                            {item.name}

                                        </Link>
                                    )}
                                    {/* <Link to={`/publisher/${detail.id}`}>{publisher}</Link> */}
                                </div>
                                <div className='detail-game-platforms d-flex flex-wrap'>
                                    <p><span><RiComputerLine/></span> Platforms</p>
                                    {detail?.platforms?.map((item, index) => (
                                        <p>
                                            {index !== 0 && ', '}
                                            {index == 0 && ': '}
                                            {item.platform.name}
                                        </p>
                                    ))}
                                </div>
                                <div className='detail-game-genres d-flex'>
                                    <p><span><TbSwords/></span> Genres</p>
                                    {detail?.genres?.map((item, index) => 
                                        <p>
                                    {index !==0 && ', '}
                                    {index ==0 && ': '}
                                        
                                        {item.name}
                                        </p>
                                    )}
                                </div>
                                <div className='detail-game-website'>
                                    <a href={detail.website} target='_blank'><button>Website Visit</button></a>
                                </div>
                            </div>
                        </div>
                        <div className='detail-game-description'>
                        <h3>Game Description</h3>
                        <ShowMoreText
                /* Default options */
                lines={10}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                truncatedEndingComponent={"... "}
            >
                        <p dangerouslySetInnerHTML={{__html: detail.description}}></p>
            </ShowMoreText>
                        </div>
                    </div>
                </div>
            </div>
                        <DetailGameTab/>
                        <DetailLikeGames/>
        
        </div>


    )
}

export default DetailGames