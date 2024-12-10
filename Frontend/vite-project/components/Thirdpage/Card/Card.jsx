import React from 'react'
import './Card.css';
import golive from '../accets/livedemo.svg'
import github from '../accets/github.svg'

function Card({ icon, title, description, link,link2 }) {
  const handleClick = (event) => {
    event.preventDefault();
    const url = link;
    window.open(url, '_blank');
  };
  const handleClick2 = (event) => {
    event.preventDefault();
    const url = link2;
    window.open(url, '_blank');
  };
  return (
    <div className="card addfeat">
      <img src={icon} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-text">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
      <div className='projectdiv'>
        <a onClick={handleClick} target="_blank" className='anceroflive' rel="noopener noreferrer">
          <img src={golive} className='goliveicon' alt="SVG Icon" width="30" height="30" />
        </a>
        <a onClick={handleClick2}target="_blank" className='anceroflive' rel="noopener noreferrer">
          <img src={github} className='goliveicon' alt="SVG Icon" width="30" height="30" />
        </a>
      </div>
    </div>
  )
}

export default Card
