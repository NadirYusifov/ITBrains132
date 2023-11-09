import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

// ========== Metacritic add ==========
import { setMetaCriticColor } from '../../../Components/Utils/setMetaCriticColor'

// ========== Dayjs ==========
import dayjs from 'dayjs';

// ========== React Icons ==========
import { AiFillStar } from 'react-icons/ai'

// ========== Style.css ==========
import '../Detail Like Games/style.css'

function DetailLikeGames() {
  const { id } = useParams()
  const [parent, setParent] = useState([])
  const [load, setLoad] = useState([])
  const loadButton = () => {
    setLoad(prevState => !prevState)
  }

  // ========== useEffect Api ==========
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/game-series?key=b9bc2788ba394d238eee7389bf54a97a&page_size=4` + load)
      .then(res => res.json())
      .then(res => setParent(res.results))
    // .then(res => console.log(res))
  }, [load])

  return (
    <>
      {/* ========== Detail Games Section 5 Start (Games Like) ========== */}
      <section className='detail-games-likes'>
        <div className='container'>
          <div className='row'>
            {parent.length ? <div className='detail-like-games-content'>
              <h3>Other Game Series</h3>
            </div> : <div className='detail-like-games-content-error'></div>}
          </div>
          <div className='detail-like-games-card'>
            {parent?.map(game =>
              <div className="detail-like-games-card-section" key={game.id}>
                <div className="detail-like-games-image">
                  <img src={game.background_image} />
                </div>
                <div className='detail-like-games-score d-flex flex-row-reverse'>
                  <span className={`${setMetaCriticColor(game.metacritic)}`}>{!!game.metacritic ? game.metacritic : 0} </span>
                </div>
                <div className='detail-like-games-content'>
                  <div className='detail-like-game-name d-flex justify-content-between'>
                    <Link to={`/detail/${game.slug}`} reloadDocument={`/detail/${game.slug}`}>
                      <h4>{game.name}</h4>
                    </Link>
                  </div>
                  <div className='detail-like-games-ratings d-flex flex-row-reverse align-items-center'>
                    <p>{game.rating} <span><AiFillStar /></span></p>
                  </div>
                </div>

                <div className='detail-like-games-card-content-item'>
                  <div className='detail-like-games-released d-flex justify-content-between'>
                    <div className='detail-like-games-released-name'>
                      <p>Released at:</p>
                    </div>
                    <div className='detail-like-games-released-content'>
                      <p>{`${dayjs(game.released).format('DD MMM YYYY')}`}</p>
                    </div>
                  </div>
                  <div className='detail-like-games-genres d-flex justify-content-between flex-wrap'>
                    <div className='detail-like-games-genres-name'>
                      <p>Genres:</p>
                    </div>
                    {parent.length ? <div className='detail-like-game-genres-content d-flex'>
                      {
                        game?.genres?.map((item, index) =>
                          <p>
                            {!!index && ', '}
                            {item.name}
                          </p>
                        )
                      }
                    </div> : <div className='detail-like-game-genres-content'> <p>TBA</p></div>}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='detail-like-games-button d-flex justify-content-center'>
            {parent.length > 3 && load &&
              <button onClick={loadButton}>
                Show more
              </button>
            }
          </div>
        </div>
      </section>
      {/* ========== Detail Games Section 5 End (Games like) ========== */}
    </>
  )
}

export default DetailLikeGames