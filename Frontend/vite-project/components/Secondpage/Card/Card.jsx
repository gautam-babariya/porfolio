import React from 'react'
import './Card.css';

function Card({ icon, title, description }) {
  return (
    <div className="card">
      <img src={icon} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-text">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  )
}

export default Card
