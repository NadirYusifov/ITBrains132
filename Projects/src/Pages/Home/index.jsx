import React from 'react'
import HomeHero from './Home Hero'
import TrendingGames from './Trending Games'
import GamesNews from './Games News'
import GameMethodArea from './Game Method Area'
import GamesDevelopment from './Game Development'
import SubscribeLoop from '../../Components/Subscribe'


function Home() {
  return (
    <div style={{
      background: "linear-gradient(180deg, #39289F 0%, #422F9C 100%)",
      backdropFilter: "blur(7px)"
    }}>

      <HomeHero />
      <TrendingGames />
      <GamesNews />
      <GamesDevelopment />
      <GameMethodArea />
      <SubscribeLoop/>
      
    </div>
  )
}

export default Home