import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import PortHero from './Port Hero'
import GameAbout from './Game About'
import Comments from './Comments'
import Subscribe from '../../Components/Subscribe'

function Portfolio() {
  return (
    <div style={{ background: "linear-gradient(150deg, #3A299F 0%, #05119D 44.79%, #2351F5 100%)"}}>
      <Header />
      <PortHero/>
      <GameAbout/>
      <Comments/>
      <Subscribe/>
      <Footer />
    </div>
  )
}

export default Portfolio