import React, { useEffect, useState } from 'react'
import '../Trending Games/style.css'
import { Link } from 'react-router-dom'

function TrendingGames() {
    const [games, setgames] = useState([])

    useEffect(() => {
      fetch("https://api.rawg.io/api/games?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30")
        .then(res => res.json())
        .then(res => setgames(res.results.slice(1, 4)))
    }, [])
  
    console.log(games);

  return (
    <>
    <section className='trending-games'>
    <div className='container'>
      <div className='row'>
        <div className='trending-games-caption col-xl-12 col-lg-12 col-md-12 d-flex justify-content-between align-items-center'>
          <p data-aos="zoom-in" data-aos-duration="2000">Currently Trending Games</p>
         <Link to="/games"><button data-aos="zoom-in" data-aos-duration="2000">See all</button></Link>
        </div>
      </div>
      <div className='row'>
        {games.map(game => {
          return <div className="col-xl-4, col-lg-4, col-md-4 pb-4" key={game.trend}>
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
  </>
  )
}

export default TrendingGames