import React from 'react'
import AboutHero from './About Hero'
import Work from './Work with us'
import GameInfo from './Game Info'
import AboutSponsor from './About Sponsor'
import SubscribeLoop from '../../Components/Subscribe'


function About() {

  return (
    <div style={{ background: "linear-gradient(180deg, #3B2A9F 33.88%, rgba(47, 69, 182, 0.44) 81.32%, rgba(114, 138, 185, 0.23) 99.57%)" }}>

      <AboutHero />
      <Work />
      <GameInfo />
      <AboutSponsor />
      <SubscribeLoop />

    </div>
  )
}

export default About