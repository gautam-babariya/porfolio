import React from 'react'
import './Loader.css'

const Loader=({ name })=> {
  return (
    <div className="loader-container">
    <div className="loader-text">
      {name}
    </div>
  </div>
  )
}

export default Loader
