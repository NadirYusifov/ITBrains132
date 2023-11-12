import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

// ========== Meta Critic Settings Add ==========
import { setMetaCriticColor } from '../../../Utils/setMetaCriticColor'

// ========== Daysjs hooks ==========
import dayjs from 'dayjs';

// ========== React Icons ==========
import { AiFillStar } from 'react-icons/ai'

// ========== Image add ==========
import ImageNoFound from '../../../Assets/image-no-found.jpg'

// ========== Style.css ==========
import '../Developer Games/style.css'


function DevelopersGames() {
    const [game, setGame] = useState([])

    const { id } = useParams()

    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=b9bc2788ba394d238eee7389bf54a97a&developers=${id}`)
            .then(res => res.json())
            .then(res => setGame(res.results))
    }, [])

    return (
        <>
            {/* ========== Developer Games Section 2 Start ========== */}
            <section className='development-games-section-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='development-games-card'>
                            {game?.map(item =>
                                <div className="development-games-card-section " key={item.id}>
                                    <div className="development-games-image">
                                        <img src={item.background_image ? item.background_image : ImageNoFound} />
                                    </div>
                                    <div className='development-games-score d-flex flex-row-reverse'>
                                        <span className={`${setMetaCriticColor(game.metacritic)}`}>{!!item.metacritic ? item.metacritic : 0} </span>
                                    </div>
                                    <div className='development-games-content'>
                                        <div className='development-games-name d-flex justify-content-between'>
                                            <Link to={`/detail/${item.slug}`} reloadDocument={`/detail/${item.slug}`}>
                                                <h4>{item.name}</h4>
                                            </Link>
                                        </div>
                                        <div className='development-games-ratings d-flex flex-row-reverse align-items-center'>
                                            <p>{item.rating} <span><AiFillStar /></span></p>
                                        </div>
                                    </div>

                                    <div className='development-games-card-content-item'>
                                        <div className='development-games-released d-flex justify-content-between'>
                                            <div className='development-games-released-name'>
                                                <p>Released at:</p>
                                            </div>
                                            <div className='development-games-released-content'>
                                                <p>{`${dayjs(item.released).format('DD MMM YYYY')}`}</p>
                                            </div>
                                        </div>
                                        <div className='development-games-genres d-flex justify-content-between flex-wrap'>
                                            <div className='development-games-genres-name'>
                                                <p>Genres:</p>
                                            </div>
                                            <div className='detail-game-additions-genres-content d-flex'>
                                                {item?.genres?.map((items, index) =>
                                                    <p key={items.id}>
                                                        {!!index && ', '}
                                                        {items.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='development-games-button d-flex justify-content-center'>
                            {parent.length > 3 && load &&
                                <button onClick={loadButton}>
                                    Show more
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== Developer Games Section 2 End ========== */}
        </>
    )
}

export default DevelopersGames