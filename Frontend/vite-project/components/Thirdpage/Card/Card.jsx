import React from 'react'
import './Card.css';

function Card({ icon, title, description,link }) {
  const handleClick = (event) => {
    event.preventDefault();
    const url = link; 
    console.log(url);
    window.open(url, '_blank'); 
  };
  return (
    <div className="card addfeat" onClick={handleClick}>
      <img src={icon} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-text">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
        <p className="card-text last-item">CLICK TO VIEW</p>
      <div className='cardhover'>
      CLICK TO VIEW
      </div>
    </div>
  )
}

export default Card
