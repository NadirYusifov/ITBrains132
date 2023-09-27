import React, { useEffect, useState } from 'react'
import { } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import "../Products Games/style.css"
import PropTypes from 'prop-types'

function ProductsGames({gameItem}) {
    const [games, setgames] = useState([])

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=b8abad1909e84a40a30128c4c9e64c27&dates=2020-09-01,2023-09-30&page_size=9000`)
      .then(res => res.json())
      .then(res => setgames(res.results))
  }, [])


 
  console.log(games);
  
  return (
    <div>
        <div className='aside-navbar'>
        <aside className='discover-navbar'>
          <nav className='discover-navbar-nav'>
            <div className='dicsover-sidebar-menu'>
              <a className='#'>Home</a>
            </div>
          </nav>
        </aside>
        </div>

        <section className='trending-games'>
        <div className='container'>
          <div className='row'>
            {games.map(game => {
              return <div className="col-xl-3 col-lg-3 col-md-4 pb-4" key={game.trend}>
                <div className='trending-games-card'>
                  <div className="trending-games-image">
                    <img src={game.background_image} style={{
                      width: "100%"
                    }} />
                  </div>
                  <div className='trending-games-content' key={game.trend}>
                    <div className='raiting-game d-flex justify-content-between'>
                      <h4>{game.name}</h4>
                    </div>
                  </div>
                  <div className='trend-genres d-flex flex-wrap'>
                    {game.genres.map(games => (
                      <p key={games.trend}>{games.name}</p>
                    ))}
                  </div>
                  <div className='trending-raiting d-flex flex-row-reverse' key={games.trend}>
                    <p><b>Raitings:</b> {game.rating}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>


  )
}

export default ProductsGames

ProductsGames.PropTypes = {
gameItem: PropTypes.object
}