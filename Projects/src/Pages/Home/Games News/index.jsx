import React from 'react'
import '../Games News/style.css'
import gameimage from "../../../Assets/games-image.jpg"
import gameimage1 from "../../../Assets/games-images-1.jpg"
import gameimage2 from "../../../Assets/games-images-2.jpg"
import gameimage3 from "../../../Assets/games-images-3.jpg"
import gameimage4 from "../../../Assets/games-images-4.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// ========== Slick Slider Button Change ========== 
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


// ========== Sick Slider Settings ========== 
function GamesNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 2,
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
      {/* ========== News Game Blog Section 1 Start ==========  */}
      <div className='new-game-blog' data-aos="fade-up" data-aos-duration="2000">
        <div className='new-game'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12'>
                <div className='game-news'>
                  <h3>New Games</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1000s.</p>
                  <button>More details</button>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <div className='game-images-slider'>
                  <Slider {...settings}>
                    <img src={gameimage1} />
                    <img src={gameimage2} />
                    <img src={gameimage3} />
                    <img src={gameimage4} />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== News Game Blog Section 1 End ==========  */}

      {/* ==========  News Game Blog Section 2 Start ==========  */}
      <div className='game-blog' data-aos="fade-up" data-aos-duration="2000">
        <div className='new-game'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-6 col-lg-5 col-md-6 col-sm-12' >
                <div className='game-image'>
                  <img src={gameimage} />
                </div>
              </div>
              <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                <div className='game-about-content'>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                  <button>More details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========  News Game Blog Section 2 End ==========  */}
    </>
  )
}

export default GamesNews