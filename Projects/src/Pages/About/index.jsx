import React, { useEffect, useState } from 'react'
import "../About/style.css"
import GameCharacter from "../../Assets/game-character.png"
import Asus from "../../Assets/asus.jpg"
import Nvidia from "../../Assets/nvidia.jpg"
import Lenovo from "../../Assets/lenovo.jpg"
import Intel from "../../Assets/intel.jpg"
import CryEngine from "../../Assets/cry-engine.jpg"
import Steam from "../../Assets/steam.jpg"
import Unreal from "../../Assets/unreal-engine.jpg"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutHero from './About Hero'
import Work from './Work with us'
import GameInfo from './Game Info'
import SubscribeLoop from '../../Components/Subscribe'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", }}
      onClick={onClick}
    />
  );
}

function About() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    centerPadding: "60px",
    speed: 3000,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 2,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          button: false,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,

        }
      }
    ]
  };

  const [users, setUsers] = useState([])
  const [bodys, setBodys] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(res => setUsers(res.posts))
  }, [])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(res => setBodys(res.users))
  }, [])

  return (
    <div style={{ background: "linear-gradient(180deg, #3B2A9F 33.88%, rgba(47, 69, 182, 0.44) 81.32%, rgba(114, 138, 185, 0.23) 99.57%)" }}>
      <Header />
      <AboutHero/>
      <Work/>
      <GameInfo/>
      <SubscribeLoop/>

{/* ========== About Section 3 Start (Setcion Game Info) ========== */}
    
{/* ========== About Section 3 End (Section Game Info) ========== */}


{/* ========== About Section 4 Start (Sponsor) ========== */}
      <div className='section-sponsor'>
        <div className='container'>
          <div className='row'>
            <div className='sponsor-slider'>
              <div className='sponsor-image'>
              <Slider {...settings}>
                <img src={Asus} />
                <img src={Lenovo}/>
                <img src={Nvidia}/>
                <img src={Unreal}/>
                <img src={Intel}/>
                <img src={CryEngine}/>
                <img src={Steam}/>
              </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ========== About Section 5 End (Sponsor) ========== */}

{/* ========== About Section 6 Start (Submit Email) ========== */}
      
{/* ========== About Section 6 End (Section Game Info) ========== */}

      <Footer />
    </div>
  )
}

export default About