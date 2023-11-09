import React, { useEffect, useRef, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from '@uidotdev/usehooks';


// function MenuFunc() {
//   useLockBodyScroll()
//   const [Mobile, setMobile] = useState(false);
//   const menu = useRef(null);
//   // const handleClick = () => {
//   //   setMobile(!Mobile)
//   // }
  
//   return(
  
//     <ul className={Mobile ? "nav-menu nav-links-mobile" : "nav-menu nav-links"}
//               ref={menu}>
//               <li><Link to='/'>Home</Link></li>
//               <li><Link to='/games'>Games</Link></li>
//               <li><Link to='/about'>About us</Link></li>
//               <li><Link to='/port'>Portfolio</Link></li>
//               <li><Link to='/news'>News</Link></li>
//               <li>
//                 <Link to='/contact'><button className='contact-btn'>Contact us</button></Link>
//               </li>
//             </ul>
            
//   )
// }


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
  
  const changedBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }
  
  window.addEventListener('scroll', changedBackground)
  
  return (
    
    <div className={Navbar ? "sticky-bar" : "header-area d-flex justify-content-between"}>
      <div className='container'>
        <div className='menu-wrapper d-flex flex-wrap justify-content-between'>
          <div className='logo d-flex align-items-center'>
            <Link to={'/'}><p>The Game Universy</p></Link>
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
                <Link to='/contact'><button className='contact-btn'>Contact us</button></Link>
              </li>
            </ul>
    {/* {Mobile ? <MenuFunc/> : <MenuFunc/> } */}
            <button className="menu-bar d-flex align-itens-center" onClick={handleClick}>
              {Mobile ? <span><ClearIcon sx={{ zIndex: "modal", fontSize: "30px" }} /> </span> :
                <span><MenuIcon
                  sx={{ fontSize: "30px" }} /> </span>
                  }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Header