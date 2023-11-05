import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function GamesPublishers() {
    const [publisher, setPublsiher] = useState([])
    const [game, setGame] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.rawg.io/api/publishers/${id}?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
            .then(res => res.json())
            .then(res => setPublsiher(res))
        // .then(res => console.log(res))
    }, [])

    useEffect(() => {
      fetch(`https://api.rawg.io/api/games?key=b8abad1909e84a40a30128c4c9e64c27&publishers=${id}`)
          .then(res => res.json())
          .then(res => setGame(res.results))
      // .then(res => console.log(res.results))
  }, [])
console.log(publisher);
console.log(game);

  return (
    <div style={{ backgroundImage: "linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)" }}>
      <div className=''></div>
      </div>
  )
}

export default GamesPublishers