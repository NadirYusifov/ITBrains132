import React, { useState } from 'react'
import ProductsGames from './Products Games'
import GameSlider from './Games Slider'

function Games() {

  return (
    <div style={{ backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)" }}>
      <GameSlider />
      <ProductsGames />
    </div>
  )
}

export default Games