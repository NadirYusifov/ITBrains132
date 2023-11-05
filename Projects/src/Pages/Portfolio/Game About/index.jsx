import React from 'react'
import gameimage from "../../../Assets/games-image.jpg"
import '../Game About/style.css'
import jobteam from "../../../Assets/job-team.jpg"
import gametech from '../../../Assets/games-tech-news.jpg'
import espor from '../../../Assets/espor-team.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// ========== Slider Change Button ==========
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


// ========== Slider Settings ==========
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

function GameAbout() {
  return (
    <>
      {/* ========== Portfolio Section 2 Start (Game About) ========== */}


      {/* ========== Job Team Blog 1 Start ========== */}
      <div className='job-team-blog' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
        <div className='blog-bl'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12'>
                <div className='team-blog-content'>
                  <h3>Amazing work team</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Blandit cursus risus at ultrices. Erat velit scelerisque in dictum non. Etiam sit amet nisl purus in mollis nunc sed id. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Amet consectetur adipiscing elit pellentesque.</p>
                  <button>More details</button>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <div className='job-team-image'>
                  <img src={jobteam} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Job Team Blog 1 End ========== */}


      {/* ========== Job Team Blog 2 Start ========== */}
      <div className='game-tech-section' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
        <div className='blog-bl'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-6 col-lg-5 col-md-6 col-sm-12'>
                <div className='game-tech-image'>
                  <img src={gametech} />
                </div>
              </div>
              <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                <div className='game-tech-content'>
                  <h3>Games and Technology News</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Pretium nibh ipsum consequat nisl vel pretium. Cursus sit amet dictum sit. Ac turpis egestas sed tempus urna. Leo duis ut diam quam nulla porttitor massa id neque. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                  <button>More details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Job Team Blog 2 End ========== */}


      {/* ========== Job Team Blog 3 Start ========== */}
      <div className='projects-section' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
        <div className='blog-bl'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12'>
                <div className='projects-content'>
                  <h3>Game Tournament (E-Spor)</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Nibh praesent tristique magna sit amet. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.</p>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <div className='project-image'>
                  <img src={espor} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Job Team Blog 3 End ========== */}


      {/* ========== Portfolio Section 2 End (Game About) ========== */}
    </>
  )
}

export default GameAbout