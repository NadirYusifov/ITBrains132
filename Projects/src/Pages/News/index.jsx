import React from 'react'
import NewsHero from './News Hero'
import NewsSection from './News Main'
import Subscribe from '../../Components/Subscribe'

function News() {
  return (
    <div style={{ background: "linear-gradient(161deg, #3165CB 0%, #030115 100%)" }}>
      <NewsHero/>
      <NewsSection />
      <Subscribe/> 
    </div>
  )
}

export default News