import React, { useEffect, useRef, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    AOS.init({
      useClassNames: false,
      debounceDelay: 50,
      animatedClassName: 'aos-animate',
      startEvent: 'DOMContentLoaded'
    })
  }, [])

  const [Mobile, setMobile] = useState(false);
  const menu = useRef(null);
  
  const handleClick = () => {
    setMobile(!Mobile)
  }
  
  const [Navbar, setNavbar] = useState(false)

  const changedBackground = () =>{
    if (window.scrollY >= 500) {
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changedBackground)

  return (
    <div className={Navbar ? "sticky-bar" : "header-area"}>
        <div className="container-fluid">
          <div className='menu-wrapper d-flex flex-wrap justify-content-between'>
            <div className='logo d-flex align-items-center'>
              <p>LOGO</p>
            </div>
            <div className='header-right d-flex align-items-center flex-wrap'>
              <ul className={Mobile ? "nav-menu nav-links-mobile" : "nav-menu nav-links"}
                ref={menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/games'>Games</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/port'>Portfolio</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li>
                  <button className='contact-btn'><Link to='/contact'>Contact us</Link></button>
                </li>
              </ul>
              <button className="menu-bar d-flex align-itens-center" onClick={handleClick}>
                {Mobile ? <ClearIcon sx={{ display: { md: "none" }, zIndex: "modal", fontSize: "30px" }} /> :
                  <MenuIcon
                    sx={{ display: { md: "none" , fontSize: "30px" } }} />}
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header