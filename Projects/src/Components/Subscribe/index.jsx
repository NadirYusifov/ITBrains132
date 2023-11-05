import React from 'react'
import '../../Components/Subscribe/style.css'

function SubscribeLoop() {
  return (
    <div className='submit-section' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="350" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out" data-aos-offset="100">
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
              <form>
                <input type='text' placeholder='Enter email adsress' id='email' className='sumbit-eamil'></input>
              </form>
              <button className='submit'>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeLoop