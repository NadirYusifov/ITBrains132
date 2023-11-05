import React, { useEffect, useState } from 'react'
import {BsArrowUp} from 'react-icons/bs'

function BackToTopButton() {
    const [backtotopButton, setbacktotopButton] = useState([])

useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setbacktotopButton(true)
        } else{
            setbacktotopButton(false)
        }
    })
}, [])

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
  return (
    <div>
    <div className='container'>
    <div className='back-to-button'>
       {backtotopButton &&
       <button style={{
            position: 'fixed', 
            display: 'block',
            bottom: '30px',
            right: '30px',
            padding: '10px 15px 10px 15px',
            fontSize: '20px',
            borderRadius: '8px',
            border: 'none',
            color: '#fff',
            backgroundColor: '#fa9021',
        }} onClick={scrollUp}>
        <BsArrowUp/>
        </button>
       } 

    </div>
    </div>
    </div>
  )
}

export default BackToTopButton