import React from 'react'

function Users({image, firstName, lastName, birthDate, email, phone}) {
    return (
        <div className='users-cart'>
        <img src={image}/>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Birth Date: {birthDate}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        </div>
    )
}

export default Users