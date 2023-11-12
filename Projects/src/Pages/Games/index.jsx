import React, { useState } from 'react'
import ProductsGames from './Products Games'
import GameSlider from './Games Slider'

function Games() {

  return (
    <div style={{ backgroundImage: "linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )"}}>
      <GameSlider />
      <ProductsGames />
    </div>
  )
}

export default Games