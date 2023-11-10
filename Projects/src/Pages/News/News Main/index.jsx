import React, { useEffect, useState } from 'react'
import './style.css'
import { Pagination } from '@mui/material'
import {BsSearch} from 'react-icons/bs'
import Spinner from 'react-bootstrap/Spinner';
import { number } from 'prop-types';

function NewsSection() {
  const [news, setNews] = useState([])
  const [newspop, setNewsPop] = useState([])
  const [page, setPage] = useState(1)
  const searchPost = (e) =>{
    const searchFiltered = news.filter(post => post.title.includes(e.target.value))
    setNews(searchFiltered)
}


  useEffect(() => {
   fetch(`https://newsapi.org/v2/everything?q=games&language=en&page=${page}&pageSize=3&apiKey=1381133efa3a4c2ea680656ed62cb997`)
     .then(res => res.json())
     .then(res => setNews(res.articles))
  }, [page])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=videogames&sortBy=popularity&language=en&pageSize=5&apiKey=1381133efa3a4c2ea680656ed62cb997')
      .then(res => res.json())
      .then(res => setNewsPop(res.articles))
   }, [])

  console.log(newspop);

  return (
    <div>
<div className='news-input-section' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="100">
        <div className='container'>
            <div className='row'>
                <div className='news-hero-search'>
                    <input type='text' name='search' id='search' placeholder='Search' onChange={searchPost}/>
                    <span><BsSearch/></span>
                </div>
            </div>
        </div>
    </div>

      <div className='news-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-12 col-md-12 '>
      <div className='news-today'>
        <span><h3>Today News</h3></span>
      </div>
              {
                news?.map((val) => {
                  return(
                    <div className='news-left' key={val.id}>
                  <article className='news-left-item'>
                  <div className='news-image'>
                    <img src={val.urlToImage} />
                  </div>
                  <div className='news-title'>
                    <h3>{val.title}</h3>
                  </div>
                  <div className='news-author'>
                    <p> {val.author}</p>
                  </div>
                  <div className='news-description'>
                    <p>{val.description}</p>
                    </div>
                  <div className='news-link'>
                    <a href={val.url}><button>Read More</button></a>
                    </div>
                  <div className='news-publish'>
                    <p>{val.publishedAt}</p>
                  </div>
                  </article>
                  <hr />
                </div>
                  )
                })
              } 
              <Pagination count={Infinity} color='primary' showFirstButton='true' showLastButton='true' sx={{button:{color: '#fff'}, div:{color:'#fff'}, fontFamily:'Poppins'}} shape='rounded' onChange={(e, value) => setPage(value)}/>
      </div>
              <div className='col-xl-6 col-lg-12'>
              <div className='trend-news'>
                <span><h3>Popularity News</h3></span>
              </div>
                  {newspop?.map((item) => {
                    return(
                <div className='news-right' key={item.id}>
                <article className='news-right-item'>
                  <div className='news-right-image d-flex'>
                    <img src={item.urlToImage} />
                  <div className='news-right-title'>
                    <a target='_blank' href={item.url}>
                  {item.title}
                    </a>
                  </div>
                  </div>
                  </article>
                </div>
                    )
                  })}
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsSection