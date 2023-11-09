import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ========== Style.css ==========
import './style.css'

function SearchBar() {
  const [game, setGame] = useState([])
  const [filterData, setFilterData] = useState([])

  // ========== useEffect API ==========
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=b9bc2788ba394d238eee7389bf54a97a&search_exact=true`)
      .then(res => res.json())
      .then(res => {
        console.log(game);
        setFilterData(res.results)
      })
  }, [])

  const handleChange = (value) => {
    const res = filterData.filter(f => f.name.toLowerCase().includes(value))
    setGame(res)
    if (value === '') {
      setGame([])
    }
  }
  return (
    <>
    {/* ========== Game Search Bar ========== */}
      <div className='detail-search-bar'>
        <div className='container'>
            <div className='detail-search-input'>
              <input placeholder='Search...' onChange={(e) => handleChange(e.target.value)} />
            </div>
            <div className='detail-search-results'>
              {game.map((item, index) => (
                <div className='detail-search-results-item d-flex align-items-center'>
                  <div className='detail-search-results-image'>
                    <img src={item.background_image}/>
                  </div>
                <div className='detail-search-results-name'>
                  <Link to={`/detail/${item.slug}`}><p>{item.name}</p></Link>
                </div>
                </div>
              ))}
            </div>
         
        </div>
      </div>
      {/* ========== Game Search Bar ========== */}
    </>
  )
}

export default SearchBar