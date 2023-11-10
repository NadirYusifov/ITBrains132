import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// ========== Show More Text ==========
import ShowMoreText from "react-show-more-text";

// ========== Style.css ==========
import '../Detail Games Description/style.css'

function DetailGamesDescription() {

    // ========== useEffect API ==========
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setDetail(res))
    }, [])

    const [detail, setDetail] = useState([])
    const { id } = useParams()
    return (
        <>
            <div className='detail-games-description'>
                <div className='container'>
                    <div className='row'>
                        <div className='detail-games-description-item'>
                            <h3>Game Description</h3>
                            <ShowMoreText
                                lines={10}
                                more="Show more"
                                less="Show less"
                                className="content-css"
                                anchorClass="show-more-less-clickable"
                                expanded={false}
                                truncatedEndingComponent={"... "}
                            >
                                <p dangerouslySetInnerHTML={{ __html: detail.description }}></p>
                            </ShowMoreText>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailGamesDescription