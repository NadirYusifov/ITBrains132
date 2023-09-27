import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ProductsGames from './Products Games'


function Games() {
  return (
    <div style={{backgroundImage: "linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)"}}>
<Header/>
<ProductsGames/>
<Footer/>
    </div>
  )
}

export default Games