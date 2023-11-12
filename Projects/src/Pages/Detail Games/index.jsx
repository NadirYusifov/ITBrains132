import React from 'react'
import BreadCrumbs from '../../Components/Bread Crumbs';
import DetailGameTab from './Detail Games Tabs';
import DetailLikeGames from './Detail Like Games';
import DetailGameReviews from './Detail Game Reviews';
import DetailGamesAdditions from './Detail Games Additions';
import DetailGamesStore from './Detail Games Store';
import DetailGamesHero from './Detail Games Hero';
import DetailGamesDescription from './Detail Games Description';


const DetailGames = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )"}}>
            <BreadCrumbs />
            <DetailGamesHero />
            <DetailGamesDescription/>
            <DetailGamesStore />
            <DetailGameTab />
            <DetailGamesAdditions />
            <DetailLikeGames />
            <DetailGameReviews />
        </div >
    )
}

export default DetailGames