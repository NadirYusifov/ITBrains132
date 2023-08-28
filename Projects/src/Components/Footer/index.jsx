import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import "../Footer/style.css"

function Footer() {
  return (
    <footer>
      <div className='footer-area'>
        <div className='container'>
          <div className='row d-flex justify-content-between'>
            <div className='col-xl-3 col-lg-3 col-md-8 col-sm-6 justify-content-between'>
              <div className='single-footer-caption'>
                <div className='footer-logo'>
                  <p>LOGO</p>
                </div>
                <div className='footer-title'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='footer-tag'>
                  <p>@Logo</p>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-5'>
              <div className='single-footer-caption'>
                <div className='footer-title'>
                  <h4>About us</h4>
                  <ul>
                    <li>Zeux</li>
                    <li>Portfolio</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-7 col-sm-5 d-flex justify-content-between'>
              <div className='single-footer-caption'>
                <div className='footer-logo'>
                  <h4>Contact us</h4>
                </div>
                <div className='footer-title'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='footer-tag'>
                  <p>+908 89097 890</p>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-5'>
            <div className='single-footer-caption'>
            <div className='footer-title'>
              <h4>Follow Us</h4>
            </div>
              <ul className='footer-scmedia'>
                <li><a href='https://www.facebook.com/'><FaFacebookF color='black' /><p>Facebook</p></a></li>
                <li><a href='https://www.instagram.com/'><FaInstagram color='black' /><p>Instagram</p></a></li>
                <li><a href='https://twitter.com/'><FaTwitter color='black' /><p>Twitter</p></a></li>
                <li><a href='https://www.linkedin.com/'><FaLinkedinIn color='black' /><p>LinkedIn</p></a></li>
              </ul>
            </div>
            </div>
            <hr />
            <div className='footer-end-content d-flex justify-content-center'>
              <p>Copyright ® 2023 prodesigner All rights Rcerved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer