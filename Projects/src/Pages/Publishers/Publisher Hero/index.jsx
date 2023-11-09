import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ========== Style.css ==========
import '../Publisher Hero/style.css'

function PublisherHero() {
    const [publisher, setPublsiher] = useState([])

    const { id } = useParams()

    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/publishers/${id}?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setPublsiher(res))
    }, [])

    return (
        <>
        {/* ========== Publisher Games Section 1 Start ========== */}
            <div className='publisher-games-section-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='publisher-games-header'>
                            <div className='publisher-game-name'>
                                <h1>Publisheed by {publisher.name}</h1>
                            </div>
                            <div className='publisher-game-description'>
                                <p dangerouslySetInnerHTML={{ __html: publisher.description }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Publisher Games Section 1 End ========== */}
        </>
    )
}

export default PublisherHero