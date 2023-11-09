import React from 'react'
import PublisherHero from './Publisher Hero';
import PublisherGames from './Publisher Games';

function GamesPublishers() {
  return (
    <div style={{ backgroundImage: "linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)" }}>
            <PublisherHero/>
            <PublisherGames/>
      </div>
  )
}

export default GamesPublishers