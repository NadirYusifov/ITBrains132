import React from 'react'

import '../Error/style.css'

function ErrorPage() {
  return (
    <div style={{backgroundImage: "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )"}}>
        <div className='error-page'>
            <h3>😵</h3>
            <h3>404 Not Page Found</h3>
            <p>Please check the search again!</p>
        </div>
    </div>
  )
}

export default ErrorPage