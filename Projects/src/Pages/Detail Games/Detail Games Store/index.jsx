import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ========== Store logo add ==========
import storesLogo from '../../../Components/Utils/setStoreLogo'

// ========== Style.css ==========
import '../Detail Games Store/style.css'

function DetailGamesStore() {
    const { id } = useParams()
    const [store, setStore] = useState([])


    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/stores?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setStore(res.results))
    }, [])
    console.log(store);

    return (
        <>
            {/* ========== Detail Games Section 3 Start (Games Store) ========== */}
            <div className='detail-games-store'>
                <div className='container'>
                    <div className='row'>
                        {store.length ? <div className='detail-games-store-head'>
                            <h3>Where to buy</h3>
                        </div> : <div className='detail-games-store-head-error'></div>}
                        <div className='detail-games-store-item d-flex'>
                            {store?.map((item, index) => {
                                const icons = storesLogo.find(
                                    (icons) => icons.id === item.store_id
                                )
                                return (
                                    <div className='detail-games-store-button'>
                                        <a href={item.url} target='_blank'>
                                            <button className='store-button'>
                                                <span className='store-icon'>{icons.icon} </span>
                                                <span className='store-name'>{icons.name}</span>
                                            </button>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Detail Games Section 3 End (Games Store) ========== */}
        </>
    )
}

export default DetailGamesStore