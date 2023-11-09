import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ========== Style.css ==========
import '../Developers Hero/style.css'

function DeveloperHero() {
    const [developer, setDeveloper] = useState([])

    const { id } = useParams()

    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/developers/${id}?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setDeveloper(res))
    }, [])

  return (
    <>
         {/* ========== Developer Games Section 1 Start ========== */}
         <div className='developer-games-section-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='developer-games-header'>
                            <div className='publisher-game-name'>
                                <h1>Publisheed by {developer.name}</h1>
                            </div>
                            <div className='publisher-game-description'>
                                <p dangerouslySetInnerHTML={{ __html: developer.description }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Developer Games Section 1 End ========== */}
    </>
  )
}

export default DeveloperHero