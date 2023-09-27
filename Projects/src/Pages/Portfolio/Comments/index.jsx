import React, { useEffect, useState } from 'react'
import '../Comments/style.css'

function Comments() {
  const [comments, setComments] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then(res => res.json())
      .then(res => setComments(res.comments))
  }, [])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then(res => res.json())
      .then(res => setResults(res.results))
  }, [])

  console.log(comments);
  console.log(results);

  return (
    <div className='comments-section-1'>
      <div className='container'>
        <div className='row'>
          <div className='comments-section-content'>
            <h3>Trusted by Thousands of Happy Customer</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
          </div>
        </div>
      </div>

      <div className='comments-wrapper'>
        <div className='container'>
          <div className='row d-flex justify-content-between'>
          <div className='customer-section col-xl-3 col-lg-4 col-md-12 col-sm-12'>
            <div className='comment-profil'>
            <div className='profil-image d-inline'>
          {results.slice(1,2).map((img => <img src={img.picture.thumbnail}/>))}
            </div>
            <div className='customer-name d-inline-flex align-items-center'>
          {results.slice(1,2).map((firstname => <p>{firstname.name.first}</p>))}
          {results.slice(1,2).map((firstname => <p>{firstname.name.last}</p>))}
            </div>
          </div>
          <div className='comments-content'>
          {comments.slice(1,2).map(customer => <p>{customer.body}</p>)}
          </div>
          <div className='customer-nickmname d-flex flex-row-reverse'>
            {results.slice(1,2).map((nickname => <p>@{nickname.login.username}</p>))}
          </div>
          </div>

          <div className='customer-section col-xl-3 col-lg-4 col-md-12 col-sm-12'>
            <div className='comment-profil'>
            <div className='profil-image d-inline'>
          {results.slice(5,6).map((img => <img src={img.picture.thumbnail}/>))}
            </div>
            <div className='customer-name d-inline-flex align-items-center'>
          {results.slice(5,6).map((firstname => <p>{firstname.name.first}</p>))}
          {results.slice(5,6).map((firstname => <p>{firstname.name.last}</p>))}
            </div>
          </div>
          <div className='comments-content'>
          {comments.slice(5,6).map(customer => <p>{customer.body}</p>)}
          </div>
          <div className='customer-nickmname d-flex flex-row-reverse'>
            {results.slice(5,6).map((nickname => <p>@{nickname.login.username}</p>))}
          </div>
          </div>

          <div className='customer-section col-xl-3 col-lg-4 col-md-12 col-sm-12'>
            <div className='comment-profil'>
            <div className='profil-image d-inline'>
          {results.slice(8,9).map((img => <img src={img.picture.thumbnail}/>))}
            </div>
            <div className='customer-name d-inline-flex align-items-center'>
          {results.slice(8,9).map((firstname => <p>{firstname.name.first}</p>))}
          {results.slice(8,9).map((firstname => <p>{firstname.name.last}</p>))}
            </div>
          </div>
          <div className='comments-content'>
          {comments.slice(8,9).map(customer => <p>{customer.body}</p>)}
          </div>
          <div className='customer-nickmname d-flex flex-row-reverse'>
            {results.slice(8,9).map((nickname => <p>@{nickname.login.username}</p>))}
          </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comments