import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Products Games/style.css"
import { Pagination } from '@mui/material';

// ========== Meta Critic Settings Add ==========
import { setMetaCriticColor } from '../../../Utils/setMetaCriticColor'

// ========== Daysjs hooks ==========
import dayjs from 'dayjs';

// ========== React Icons ==========
import { AiFillStar } from 'react-icons/ai'

// ========== Image add ==========
import ImageNoFound from '../../../Assets/image-no-found.jpg'

import '../Products Games/style.css'

function ProductsGames() {

  const [games, setGames] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=b9bc2788ba394d238eee7389bf54a97a&page=${page}&page_size=40&ordering=-added`)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => setGames(res.results))
  }, [page])


  return (
    <>
    {/* ========== Products Games Section 1 Start ========== */}
    <div className='product-games'>
      <div className='container'>
        <div className='row'>
          <section className='product-games-section-2'>
            <div className='container'>
              <div className='row'>
                <div className='product-games-card'>
                  {games?.map(item =>
                    <div className="product-games-card-section " key={games.id}>
                      <div className="product-games-image">
                        <img src={item.background_image ? item.background_image : ImageNoFound} />
                      </div>
                      <div className='product-games-score d-flex flex-row-reverse'>
                        <span className={`${setMetaCriticColor(item.metacritic)}`}>{!!item.metacritic ? item.metacritic : 0} </span>
                      </div>
                      <div className='product-games-content'>
                        <div className='product-games-name d-flex justify-content-between'>
                          <Link to={`/detail/${item.slug}`} reloadDocument={`/detail/${item.slug}`}>
                            <h4>{item.name}</h4>
                          </Link>
                        </div>
                        <div className='product-games-ratings d-flex flex-row-reverse align-items-center'>
                          <p>{item.rating} <span><AiFillStar /></span></p>
                        </div>
                      </div>

                      <div className='product-games-card-content-item'>
                        <div className='product-games-released d-flex justify-content-between'>
                          <div className='product-games-released-name'>
                            <p>Released at:</p>
                          </div>
                          <div className='product-games-released-content'>
                            <p>{`${dayjs(item.released).format('DD MMM YYYY')}`}</p>
                          </div>
                        </div>
                        <div className='product-games-genres d-flex justify-content-between flex-wrap'>
                          <div className='product-games-genres-name'>
                            <p>Genres:</p>
                          </div>
                          <div className='detail-game-additions-genres-content d-flex'>
                            {
                              item?.genres?.map((items, index) =>
                                <p>
                                  {!!index && ', '}
                                  {items.name}
                                </p>
                              )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='product-games-button d-flex justify-content-center'>
                  {parent.length > 3 && load &&
                    <button onClick={loadButton}>
                      Show more
                    </button>
                  }
                </div>
              </div>
            </div>
          </section>
          <Pagination className='game-pagination' showFirstButton showLastButton count={Infinity} shape='rounded' variant='outlined' size='large' sx={{ div: { color: " #fff" }, button: { color: "#fff" } }} onChange={(e, value) => setPage(value)} />
        </div>
      </div >
      </div>
      {/* ========== Product Games Section 1 End  ========== */}
    </>

  )
}

export default ProductsGames