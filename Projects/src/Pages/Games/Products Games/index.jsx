import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Products Games/style.css"
import { Card } from 'react-bootstrap';
import { Pagination } from '@mui/material';
import ScrollToTop from '../../../Components/Scroll Top Page/ScrollTopPage';



function ProductsGames() {

  const [games, setgames] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30&page=${page}&page_size=24`)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => setgames(res.results))
  }, [page])



  // games.map((item) => (
  //   console.log(item.id)
  // ))
  // const dispatch = useDispatch()
  // function addDetail(elem) {
  //   dispatch(addDetailAction(elem))
  // }

  return (
    <div className='trend-games'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6'>
            <article className='category-item'>
              <div className=''>

              </div>
            </article>


          </div>
          <section className='trending-games'>
            <div className='container'>
              <div className='row'>
              </div>
              <div className='row'>
                {games.map((game) => {
                  return (
                    <div className="col-xl-3 col-lg-3 col-md-4 pb-4" key={game.id}>
                      <div className='trending-games-card'>
                        <div className="trending-games-image">
                          <img src={game.background_image} style={{
                            width: "100%"
                          }} />
                        </div>
                        <div className='trending-games-content'>
                          <div className='rating-game-name d-flex justify-content-between'>
                            <Link to={`/detail/${game.slug}`}>
                              <h4>{game.name}</h4>
                            </Link>
                          </div>
                        </div>
                        <div className='trend-genres d-flex flex-wrap justify-content-between'>
                          <span>Genres</span>
                          {game?.genres.map(games => (
                            <p key={games.id}>{games.name}</p>
                          ))}
                        </div>
                        <div className='trending-raiting d-flex flex-row-reverse'>
                          <p><b>Raitings:</b> {game.rating}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <Pagination className='game-pagination' showFirstButton showLastButton count={Infinity} shape='rounded' variant='outlined' size='large' sx={{ div: { color: " #fff" }, button: { color: "#fff" } }} onChange={(e, value) => setPage(value)} />
              </div>
            </div>
          </section>
        </div>
      </div >
    </div >

  )
}

export default ProductsGames