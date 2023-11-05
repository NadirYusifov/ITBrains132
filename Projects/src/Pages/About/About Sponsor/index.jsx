import React from 'react'
import Asus from "../../../Assets/asus.jpg"
import Nvidia from "../../../Assets/nvidia.jpg"
import Lenovo from "../../../Assets/lenovo.jpg"
import Intel from "../../../Assets/intel.jpg"
import CryEngine from "../../../Assets/cry-engine.jpg"
import Steam from "../../../Assets/steam.jpg"
import Unreal from "../../../Assets/unreal-engine.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../About Sponsor/style.css'


// ========== Slider Button Change ==========
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


function AboutSponsor() {

  // ========== Slider Settings ==========
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

  return (
    <>
      {/* ========== About Section 4 Start (Sponsor Slider) ========== */}
      <div className='section-sponsor'>
        <div className='container'>
          <div className='row'>
            <div className='sponsor-slider'>
              <div className='sponsor-image'>
                <Slider {...settings}>
                  <img src={Asus} />
                  <img src={Lenovo} />
                  <img src={Nvidia} />
                  <img src={Unreal} />
                  <img src={Intel} />
                  <img src={CryEngine} />
                  <img src={Steam} />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== About Section 4 End (Sponsor Slider) ========== */}
    </>
  )
}

export default AboutSponsor