import React from 'react'
import DeveloperHero from './Developers Hero'
import DevelopersGames from './Developer Games'

function GameDevelopers() {
  return (
    <div style={{backgroundImage: 'linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)'}}>
    <DeveloperHero/>
    <DevelopersGames/>
    </div>
  )
}

export default GameDevelopers