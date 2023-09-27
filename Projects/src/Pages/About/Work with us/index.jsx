import React, { useEffect, useState } from 'react'
import '../Work with us/style.css'

function Work() {

    const [users, setUsers] = useState([])
    const [bodys, setBodys] = useState([])
  
    useEffect(() => {
      fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(res => setUsers(res.posts))
    }, [])
  
    useEffect(() => {
      fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(res => setBodys(res.users))
    }, [])

  return (
    <>
     <div className='method-text'>
        <div className='container'>
          <div className='text-block'>
            <p>Why work with us</p>
          </div>
        </div>
      </div>
      <div className='person-method-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='method-wrapper-worker'>
                <div className='person-work'>
                  {bodys.slice(0, 1).map((work => <p>{work.company.title}</p>))}
                  <div className='person-name'>
                    {bodys.slice(0, 1).map((name => <h3>{name.firstName} {name.lastName}</h3>))}
                  </div>
                </div>
                <div className='person-content'>
                  {users.slice(0, 1).map((body =>
                    <p>{body.body}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='method-wrapper-worker'>
                <div className='person-work-2'>
                  {bodys.slice(1, 2).map((work => <p>{work.company.title}</p>))}
                  <div className='person-name'>
                    {bodys.slice(1, 2).map((name => <h3>{name.firstName} {name.lastName}</h3>))}
                  </div>
                </div>
                <div className='person-content'>
                  {users.slice(1, 2).map((body =>
                    <p>{body.body}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='method-wrapper-worker'>
                <div className='person-work-3'>
                  {bodys.slice(2, 3).map((work => <p>{work.company.title}</p>))}
                  <div className='person-name'>
                    {bodys.slice(2, 3).map((name => <h3>{name.firstName} {name.lastName}</h3>))}
                  </div>
                </div>
                <div className='person-content'>
                  {users.slice(4, 5).map((body =>
                    <p>{body.body}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Work