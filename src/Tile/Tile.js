import React, { useState } from "react"
import "./Tile.css"

function Tile({ title, year, img, rating, id, displayMovie }) {
  const [ hovering, setHover ] = useState(false)

  const overlay = <div 
      className="overlay"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    <p>{title}</p>
    <p>{`(${year.slice(0, 4)})`}</p>
  </div>

  return (
    <li>
      <div className="img-container">
        <img 
          className={hovering ? "hover-animation" : undefined}
          src={img} 
          alt={title} 
          onClick={() => displayMovie(id)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {hovering && overlay}
      </div>
      <p className="tile-rating">{rating} ⭐️</p>
    </li>
  )
}

export default Tile