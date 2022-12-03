import React, { useState } from "react"
import "./Tile.css"

import star from "../assets/star.png"

function Tile({ title, year, img, rating, id, displayMovie }) {
  const [ hovering, setHover ] = useState(false)

  const overlay = 
    <div 
      className="overlay"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className="overlay-text">{title}</p>
      <p className="overlay-text">{`(${year.slice(0, 4)})`}</p>
    </div>

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter") {
      displayMovie(id)
    }
  }

  return (
    <li 
      tabIndex={1}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onKeyDown={(e) => handleKeyDown(e, id)}
    >
      <div className="img-container">
        <img 
          className={hovering ? `hover-animation tile-img` : 
            `tile-img`}
          src={img} 
          alt={title} 
          onClick={() => displayMovie(id)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {hovering && overlay}
      </div>
      <p className="tile-rating">{rating.toFixed(1)} <img className="star" src={star}/></p>
    </li>
  )
}

export default Tile