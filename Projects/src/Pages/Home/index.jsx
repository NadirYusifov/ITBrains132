import React, { useEffect, useState } from 'react'
import "../Home/style.css"
import joystick from "../../Assets/joy_stick 1.png"
import gameimage from "../../Assets/games-image.jpg"
import gameimage1 from "../../Assets/games-images-1.jpg"
import gameimage2 from "../../Assets/games-images-2.jpg"
import gameimage3 from "../../Assets/games-images-3.jpg"
import gameimage4 from "../../Assets/games-images-4.jpg"
import { BsPhone } from "react-icons/bs"
import { BsLaptop } from 'react-icons/bs'
import { SiPlaystation4 } from "react-icons/si"
import { PiVirtualReality } from "react-icons/pi"
import { FiArrowRight } from "react-icons/fi"
import { GrGamepad } from "react-icons/gr"
import { FaRegHandshake } from "react-icons/fa"
import { BsShieldLock } from "react-icons/bs"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

function Home() {
  const [games, setgames] = useState([])

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=b8abad1909e84a40a30128c4c9e64c27&dates=2021-09-01,2022-09-30")
      .then(res => res.json())
      .then(res => setgames(res.results.slice(1, 4)))
  }, [])

  console.log(games);


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
    <div style={{
      background: "linear-gradient(180deg, #39289F 0%, #422F9C 100%)",
      backdropFilter: "blur(7px)"
    }}>
      <Header />
      <div className='hero-area'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-between'>
            <div className='col-xl-6 col-lg-6 col-md-8' data-aos="fade-right" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000" data-aos-anchor="#example-anchor">
              <div className='hero-caption'>
                <h1>
                  Work that we produce for our clients
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>
                <button className='hero-btn'>Get more details</button>
              </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-4' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="100" data-aos-delay="350" data-aos-duration="2000">
              <div className='hero-image'>
                <img src={joystick} />
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='trending-games'>
        <div className='container'>
          <div className='row'>
            <div className='trending-games-caption col-xl-12 col-lg-12 col-md-12 d-flex justify-content-between align-items-center' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="350" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out" data-aos-offset="100">
              <p>Currently Trending Games</p>
              <button>See all</button>
            </div>
          </div>
          <div className='row'>
            {games.map(game => {
              return <div className="col-xl-4, col-lg-4, col-md-4 pb-4" key={game.trend}>
                <div className='trending-games-card'>
                  <div className="trending-games-image">
                    <img src={game.background_image} style={{
                      width: "100%"
                    }} />
                  </div>
                  <div className='trending-games-content' key={game.trend}>
                    <div className='raiting-game d-flex justify-content-between'>
                      <h4>{game.name}</h4>
                    </div>
                  </div>
                  <div className='trend-genres d-flex flex-wrap'>
                    {game.genres.map(games => (
                      <p key={games.trend}>{games.name}</p>
                    ))}
                  </div>
                  <div className='trending-raiting d-flex flex-row-reverse' key={games.trend}>
                    <p><b>Raitings:</b> {game.rating}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>

      <div className='new-game-blog'>
        <div className='new-game'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-5 col-lg-5 col-md-6 col-sm-5' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <div className='game-news'>
                  <h3>New Games</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1000s.</p>
                  <button>More details</button>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-5' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out" data-aos-delay="400" data-aos-offset="100">
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

      <div className='game-blog'>
        <div className='new-game'>
          <div className='container'>
            <div className='row d-flex justify-content-between align-items-center'>
              <div className='col-xl-6 col-lg-5 col-md-6 col-sm-5' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="ease-out" data-aos-anchor-placement="top-bottom" data-aos-offset="100">
                <div className='game-image'>
                  <img src={gameimage} />
                </div>
              </div>
              <div className='col-xl-5 col-lg-6 col-md-6 col-sm-5' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
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

      <div className='overlay'>
        <div className='gamebackground-image'>
          <div className='container'>
            <div className='row d-flex justify-content-center flex-wrap'>
              <div className='game-content-first' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1000s.</p>
              </div>
              <div className='col-md-10' data-aos="fade-up"
                data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <div className='row'>
                  <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row'>
                    <div className='block-18 text-center'>
                      <div className='text'>
                        <div className='dev-logo'>
                          <span><BsPhone /></span>
                        </div>
                        <p>Mobile Game Development</p>
                        <span className='text-arrow'><FiArrowRight /></span>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row'>
                    <div className='block-18 text-center'>
                      <div className='text'>
                        <div className='dev-logo'>
                          <span><BsLaptop /></span>
                        </div>
                        <p>Mobile Game Development</p>
                        <span className='text-arrow'><FiArrowRight /></span>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row'>
                    <div className='block-18 text-center'>
                      <div className='text'>
                        <div className='dev-logo'>
                          <span><SiPlaystation4 /></span>
                        </div>
                        <p>Mobile Game Development</p>
                        <span className='text-arrow'><FiArrowRight /></span>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 col-lg-3 d-flex justify-content-center flex-row'>
                    <div className='block-18 text-center'>
                      <div className='text'>
                        <div className='dev-logo'>
                          <span><PiVirtualReality /></span>
                        </div>
                        <p>Mobile Game Development</p>
                        <span className='text-arrow'><FiArrowRight /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='game-method-area'>
        <div className='container'>
          <div className='method-wrapper' data-aos="fade-up"
            data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='text-logo'>
                  <div className='method-logo'>
                    <span><GrGamepad /></span>
                  </div>
                  <h5>Amazing Game Choose</h5>
                  <p>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='text-logo'>
                  <div className='method-logo'>
                    <span><FaRegHandshake /></span>
                  </div>
                  <h5>Amazing Game Choose</h5>
                  <p>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <div className='text-logo'>
                  <div className='method-logo'>
                    <span><BsShieldLock /></span>
                  </div>
                  <h5>Amazing Game Choose</h5>
                  <p>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='submit-section'>
        <div className='container'>
          <div className='submit-content'>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='submit-wrapper'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex align-items-center flex-wrap justify-content-between'>
              <div className='submit-wrapper-content'>
                <h3>Stay in the loop</h3>
                <p>Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
              </div>
              <div className='submit-input'>
                <input type='email' placeholder='Enter email adsress' className='sumbit-eamil'></input>
                <button className='submit'>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Home