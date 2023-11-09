import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// ========== Dayjs hooks ==========
import dayjs from 'dayjs'

// ========== Show More Text hooks ==========
import ShowMoreText from "react-show-more-text";

// ========== Style.css ==========
import '../Detail Game Reviews/style.css'

function DetailGameReviews() {
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}/reviews?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setReviews(res))
    }, [])

    return (
        <>
        {/* ========== Detail Section 6 Start (Games Reviews) ========== */}
            <div className='detail-games-reviews'>
                <div className='container'>
                    <div className='row'>
                        {reviews?.results?.length ? <div className='detail-games-reviews-header'>
                            <h1>Reviews</h1>
                        </div> : <div className='detail-games-reviews-header-error'></div>}
                        {reviews?.results?.map((item, index) =>
                            <div className='detail-games-reviews-item'>
                                <div className='detail-games-reviews-profil-header d-flex'>
                                    <div className='detail-games-reviews-profil-image'>
                                        <img src={item.external_avatar} />
                                    </div>
                                    <div className='detail-games-reviews-profil-image-1'>
                                        <img src={item?.user?.avatar} />
                                    </div>
                                    <div className='detail-games-reviews-profil-header-content'>
                                        <div className='detail-games-reviews-profil-name'>
                                            <h6>{item.external_author}</h6>
                                            <h6>{item?.user?.username}</h6>
                                        </div>
                                        <div className='detail-games-reviews-profil-date'>
                                            <p>{`${dayjs(item.created).format('DD MMM YYYY')}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='detail-games-reviews-main'>
                                    <div className='detail-games-reviews-main-content'>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={5}
                                            more="Show more"
                                            less="Show less"
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            expanded={false}
                                            truncatedEndingComponent={"... "}
                                        >
                                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        </ShowMoreText>
                                    </div>
                                    <div className='detail-games-reviews-main-image'>
                                        <img src={item.share_image} />
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* ========== Deatil Games Section 6 End (Games Reviews) ========== */}
        </>
    )
}

export default DetailGameReviews