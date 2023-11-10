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
        <div style={{ backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)" }}>
            <BreadCrumbs />
            <DetailGamesHero />
            <DetailGamesDescription/>
            <DetailGamesStore />
            <DetailGameTab />
            <DetailGamesAdditions />
            <DetailLikeGames />
            <DetailGameReviews />
        </div>
    )
}

export default DetailGames