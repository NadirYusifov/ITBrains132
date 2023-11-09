import React from 'react'
import '../Game Info/style.css'
import GameCharacters from "../../../Assets/game-character.png"

function GameInfo() {
    return (
        <>
            {/* ========== About Section 3 Start (Game Info) ========== */}
            <div className='section-intro'>
                <div className='game-info-section'>
                    <div className='container'>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <div className='col-xl-6 col-lg-6 col-md-12' data-aos="zoom-in"  data-aos-duration="2000">
                                <div className='section-intro-image'>
                                    <img src={GameCharacters} />
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-6 col-md-12' data-aos="zoom-in" data-aos-duration="2000">
                                <div className='section-intro-content'>
                                    <p>Lorem ipsum</p>
                                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Game Section 3 End (Game Info) ========== */}
        </>
    )
}

export default GameInfo