import React from 'react'
import PortHero from './Port Hero'
import GameAbout from './Game About'
import Comments from './Comments'
import Subscribe from '../../Components/Subscribe'

function Portfolio() {
  return (
    <div style={{ background: "linear-gradient(150deg, #3A299F 0%, #05119D 44.79%, #2351F5 100%)"}}>
      <PortHero/>
      <GameAbout/>
      <Comments/>
      <Subscribe/>
    </div>
  )
}

export default Portfolio