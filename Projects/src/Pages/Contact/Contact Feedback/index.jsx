import React from 'react'
import FeedbackImage from '../../../Assets/contact-background.jpg'
import '../Contact Feedback/style.css'

function Feedback() {
  return (
    <div>
      <div className='feedback-section'>
        <div className='feedback-image'>
          <div className='container'>
            <div className='row'>
              <div className='feedback-section-text'>
                <div className='feedback-text'>
                  <h3>Say hello</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className='feedback-input-section'>
                <div className='feedback-inputs d-xl-flex justify-content-between'>
                  <div className='col-xl-5 col-lg-6 col-md-12 col-sm-12'>
                    <div className='feedback-input-name'>
                      <p>First Name</p>
                      <input required></input>
                    </div>
                  </div>
                  <div className='col-xl-5 col-lg-6 col-md-12 col-sm-12'>
                    <div className='feedback-input-surname'>
                      <p>Last Name</p>
                      <input required></input>
                    </div>
                  </div>
                </div>
                <div className='feedback-email'>
                  <p>Email Address</p>
                  <input required></input>
                </div>
                <div className='feedback-message'>
                  <p>Message</p>
                  <textarea style={{ height: "232px" }} />
                </div>
              </div>
              <div className='feedback-btn d-flex'>
                <button type="submit">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback