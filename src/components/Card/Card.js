import React from 'react'
import './Card.css'
const Card = ({name,data}) => {
  return (
    <div className='card-wrapper'>
        <h1>Find Your Master</h1>
        <div className='card'>
            <h1>{name}</h1>
            <button onClick={data}>Force</button>
        </div>
    </div>
  )
}

export default Card