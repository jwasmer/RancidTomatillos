import React, { useState } from "react"
import "./Tile.css"

function Tile({ title, year, img, rating, id, displayMovie }) {
  const [ hovering, setHover ] = useState(false)

  const overlay = 
    <div 
      className="overlay"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>{title}</p>
      <p>{`(${year.slice(0, 4)})`}</p>
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
      <p className="tile-rating">{rating.toFixed(1)} ⭐️</p>
    </li>
  )
}

export default Tile