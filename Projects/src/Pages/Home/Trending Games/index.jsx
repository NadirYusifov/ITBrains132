import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Trending Games/style.css'

// ========== Meta Critic Settings Add ==========
import { setMetaCriticColor } from '../../../Utils/setMetaCriticColor'

// ========== Daysjs hooks ==========
import dayjs from 'dayjs';

// ========== React Icons ==========
import { AiFillStar } from 'react-icons/ai'

// ========== Image add ==========
import ImageNoFound from '../../../Assets/image-no-found.jpg'

function TrendingGames() {
    const [games, setgames] = useState([])

    useEffect(() => {
      fetch("https://api.rawg.io/api/games?key=b9bc2788ba394d238eee7389bf54a97a")
        .then(res => res.json())
        .then(res => setgames(res.results.slice(0,4)))
    }, [])
  
    console.log(games);

  return (
    <>
    <section className='trending-games'>
                <div className='container'>
                    <div className='row'>
                        {games.length ? <div className='trending-games-content'>
                            <h3>Trending Games</h3>
                        </div> : <div className='detail-additions-games-content-error'></div>}
                    </div>
                    <div className='trending-games-card'>

                        {games?.map(game =>
                            <div className="trending-games-card-section " key={game.id}>
                                <div className="trending-games-image">
                                    <img src={game.background_image ? game.background_image : ImageNoFound} />
                                </div>
                                <div className='trending-games-score d-flex flex-row-reverse'>
                                    <span className={`${setMetaCriticColor(game.metacritic)}`}>{!!game.metacritic ? game.metacritic : 0} </span>
                                </div>
                                <div className='trending-games-content'>
                                    <div className='trending-games-name d-flex justify-content-between'>
                                        <Link to={`/detail/${game.slug}`} reloadDocument={`/detail/${game.slug}`}>
                                            <h4>{game.name}</h4>
                                        </Link>
                                    </div>
                                    <div className='trending-games-ratings d-flex flex-row-reverse align-items-center'>
                                        <p>{game.rating} <span><AiFillStar /></span></p>
                                    </div>
                                </div>

                                <div className='trending-games-card-content-item'>
                                    <div className='trending-games-released d-flex justify-content-between'>
                                        <div className='trending-games-released-name'>
                                            <p>Released at:</p>
                                        </div>
                                        <div className='trending-games-released-content'>
                                            <p>{`${dayjs(game.released).format('DD MMM YYYY')}`}</p>
                                        </div>
                                    </div>
                                    <div className='trending-games-genres d-flex justify-content-between flex-wrap'>
                                        <div className='trending-games-genres-name'>
                                            <p>Genres:</p>
                                        </div>
                                        <div className='detail-game-additions-genres-content d-flex'>
                                            {
                                                game?.genres?.map((item, index) =>
                                                    <p>
                                                        {!!index && ', '}
                                                        {item.name}
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='trending-games-button d-flex justify-content-center'>
                        {parent.length > 3 && load &&
                            <button onClick={loadButton}>
                                Show more
                            </button>
                        }
                    </div>
                </div>
            </section>
  </>
  )
}

export default TrendingGames