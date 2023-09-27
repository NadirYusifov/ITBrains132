import React from 'react'
import '../../Components/Subscribe/style.css'

function SubscribeLoop() {
  return (
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
  )
}

export default SubscribeLoop