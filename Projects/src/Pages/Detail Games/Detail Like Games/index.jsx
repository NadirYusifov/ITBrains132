import { Icon } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { setMetaCriticColor } from '../../../Components/Utils/setMetaCriticColor'
import '../Detail Like Games/style.css'
import ShowMoreText from "react-show-more-text";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'



function DetailLikeGames() {
  const { id } = useParams()
  const [parent, setParent] = useState([])
  const [detail, setDetail] = useState([])
  const [load, setLoad] = useState([])
  const loadButton = () => {
    setLoad(load+4)
  }

  dayjs.extend(relativeTime)
  const releasedDate = `${dayjs(parent.released).format('DD MMM YYYY')}`

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/reviews?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
      .then(res => res.json())
      .then(res => setDetail(res))
    // .then(res => console.log(res))
  }, [])

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/game-series?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30&page_size=4`+load)
      .then(res => res.json())
      .then(res => setParent(res.results))
    // .then(res => console.log(res))
  }, [load])

  console.log(detail);
  console.log(parent);

  return (
    <div>

      <section className='trending-games'>
        <div className='container'>
          <div className='row'>
           {parent.length ? <div className='detail-like-games-content'>
              <h3>Other Game Series</h3>
            </div> : <div className='detail-like-games-content-error'></div> }
          </div>
          <div className='detail-like-games-card'>

            {parent?.map(game =>
              <div className="detail-like-games-card-section " key={game.id} style={{lineClamp: 3, boxOrient: "vertical", overflow: 'hidden', }}>

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
                </div>

                <div className='detail-like-games-card-content-item'>
                  <div className='detail-like-games-released d-flex justify-content-between'>
                    <div className='detail-like-games-released-name'>
                      <p>Released at</p>
                    </div>
                    <div className='detail-like-games-released-content'>
                      <p>{releasedDate}</p>
                    </div>
                  </div>
                  <div className='detail-like-games-genres d-flex justify-content-between'>
                    <div className='detail-like-games-genres-name'>
                      <span>Genres</span>
                    </div>
                    <div className='detail-like-game-genres-content d-flex'>
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
       <div className='detail-like-games-button'>
         { parent.length > 4 && load &&
          <button onClick={loadButton}> 
                 Show more
          </button>
        }
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailLikeGames