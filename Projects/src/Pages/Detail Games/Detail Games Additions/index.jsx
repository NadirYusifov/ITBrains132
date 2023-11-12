import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// ========== Meta Critic Settings Add ==========
import { setMetaCriticColor } from '../../../Utils/setMetaCriticColor'

// ========== Daysjs hooks ==========
import dayjs from 'dayjs';

// ========== React Icons ==========
import { AiFillStar } from 'react-icons/ai'

// ========== Image add ==========
import ImageNoFound from '../../../Assets/image-no-found.jpg'

// ========== Style.css ==========
import '../Detail Games Additions/style.css'


function DetailGamesAdditions() {
    const { id } = useParams()
    const [parent, setParent] = useState([])
    const [load, setLoad] = useState([])
    const loadButton = () => {
        setLoad(prevState => !prevState)
    }

    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/additions?key=b9bc2788ba394d238eee7389bf54a97a&page_size=4` + load)
            .then(res => res.json())
            .then(res => setParent(res.results))
        // .then(res => console.log(res))
    }, [load])

    return (
        <>
            {/* ========== Detail Games Section 4 Start (Games Additions) ========== */}
            <section className='detail-games-additions'>
                <div className='container'>
                    <div className='row'>
                        {parent.length ? <div className='detail-games-additions-content'>
                            <h3>Games Additions</h3>
                        </div> : <div className='detail-additions-games-content-error'></div>}
                    </div>
                    <div className='detail-games-additions-card'>

                        {parent?.map(game =>
                            <div className="detail-games-additions-card-section " key={game.id}>
                                <div className="detail-games-additions-image">
                                    <img src={game.background_image ? game.background_image : ImageNoFound} />
                                </div>
                                <div className='detail-games-additions-score d-flex flex-row-reverse'>
                                    <span className={`${setMetaCriticColor(game.metacritic)}`}>{!!game.metacritic ? game.metacritic : 0} </span>
                                </div>
                                <div className='detail-games-additions-content'>
                                    <div className='detail-games-additions-name d-flex justify-content-between'>
                                        <Link to={`/detail/${game.slug}`} reloadDocument={`/detail/${game.slug}`}>
                                            <h4>{game.name}</h4>
                                        </Link>
                                    </div>
                                    <div className='detail-games-additions-ratings d-flex flex-row-reverse align-items-center'>
                                        <p>{game.rating} <span><AiFillStar /></span></p>
                                    </div>
                                </div>

                                <div className='detail-games-additions-card-content-item'>
                                    <div className='detail-games-additions-released d-flex justify-content-between'>
                                        <div className='detail-games-additions-released-name'>
                                            <p>Released at:</p>
                                        </div>
                                        <div className='detail-games-additions-released-content'>
                                            <p>{`${dayjs(game.released).format('DD MMM YYYY')}`}</p>
                                        </div>
                                    </div>
                                    <div className='detail-games-additions-genres d-flex justify-content-between flex-wrap'>
                                        <div className='detail-games-additions-genres-name'>
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
                    <div className='detail-games-additions-button d-flex justify-content-center'>
                        {parent.length > 3 && load &&
                            <button onClick={loadButton}>
                                Show more
                            </button>
                        }
                    </div>
                </div>
            </section>
            {/* ========== Detail Games Section 4 End (Games Additions) ========== */}
        </>
    )
}

export default DetailGamesAdditions