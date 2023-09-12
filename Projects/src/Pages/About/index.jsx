import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa"
import "../About/style.css"
import Person from "../../Assets/question-people.png"
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

  console.log(bodys);
  console.log(users);

  return (
    <div style={{ background: "linear-gradient(180deg, #3B2A9F 33.88%, rgba(47, 69, 182, 0.44) 81.32%, rgba(114, 138, 185, 0.23) 99.57%)" }}>
      <Header />

      {/* ========== About Section 1 Start (Hero) ========== */}
      <div className='about-hero'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-between'>
            <div className='col-xl-6 col-lg-6 col-md-8'>
              <div className='hero-about-caption'>
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and.
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className='hero-btn'>Get in touch <FaArrowRight /></button>
              </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-4'>
              <div className='hero-about-image'>
                <img src={Person} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== About Section 1 End (Hero) ========== */}


      {/* ========== About Section 2 Start (Person Work) ========== */}
      <div className='method-text'>
        <div className='container'>
          <div className='text-block'>
            <p>Why work with us</p>
          </div>
        </div>
      </div>
      <div className='person-method-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='method-wrapper-worker'>
                <div className='person-work'>
                  {bodys.slice(0, 1).map((work => <p>{work.company.title}</p>))}
                  <div className='person-name'>
                    {bodys.slice(0, 1).map((name => <h3>{name.firstName} {name.lastName}</h3>))}
                  </div>
                </div>
                <div className='person-content'>
                  {users.slice(0, 1).map((body =>
                    <p>{body.body}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='method-wrapper-worker'>
                <div className='person-work-2'>
                  {bodys.slice(1, 2).map((work => <p>{work.company.title}</p>))}
                  <div className='person-name'>
                    {bodys.slice(1, 2).map((name => <h3>{name.firstName} {name.lastName}</h3>))}
                  </div>
                </div>
                <div className='person-content'>
                  {users.slice(1, 2).map((body =>
                    <p>{body.body}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='method-wrapper-worker'>
                <div className='person-work-3'>
                  {bodys.slice(2, 3).map((work => <p>{work.company.title}</p>))}
                  <div className='person-name'>
                    {bodys.slice(2, 3).map((name => <h3>{name.firstName} {name.lastName}</h3>))}
                  </div>
                </div>
                <div className='person-content'>
                  {users.slice(4, 5).map((body =>
                    <p>{body.body}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== About Section 2 End (Person Work) ========== */}


{/* ========== About Section 3 Start (Setcion Game Info) ========== */}
      <div className='section-intro'>
        <div className='container'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-xl-6 col-lg-6 col-md-12'>
              <div className='section-intro-image'>
                <img src={GameCharacter} />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 col-md-12'>
              <div className='section-intro-content'>
                <p>Lorem ipsum</p>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
{/* ========== About Section 6 End (Section Game Info) ========== */}

      <Footer />
    </div>
  )
}

export default About