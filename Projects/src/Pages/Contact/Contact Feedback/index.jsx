import React from 'react'
import '../Contact Feedback/style.css'

function Feedback() {
  return (
    <>
    {/* ========== Contact Section 2 Start (Feedback) ========== */}
      <div className='feedback-section'>
        <div className='feedback-image'>
          <div className='container'>
            <div className='row'>
              <div className='feedback-section-text' data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
                <div className='feedback-text'>
                  <h3>Say hello</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <form>
                <div className='feedback-input-section' data-aos="zoom-in" data-aos-duration="2000" >
                  <div className='feedback-inputs d-xl-flex justify-content-between'>
                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12' >
                      <div className='feedback-input-name'>
                        <label>First Name:</label>
                        <input type='text' id='fname' name='fname' placeholder='Alex' required />
                      </div>
                    </div>
                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12' >
                      <div className='feedback-input-surname'>
                        <label>Last Name:</label>
                        <input type='text' id='lname' name='lname' placeholder='Betten' required />
                      </div>
                    </div>
                  </div>
                  <div className='feedback-email' >
                    <label>Email Adress:</label>
                    <input type='text' id='email' name='email' placeholder='example@gmail.com' required />
                  </div>
                  <div className='feedback-message' >
                    <label>Message:</label>
                    <textarea style={{ height: "232px" }} required />
                  </div>
                </div>
                <div className='feedback-btn' >
                  <button type='submit'>Get in touch</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Contact Section 2 End (Feedback) ========== */}
    </>
  )
}

export default Feedback