import React, { useState } from "react"
import { Link } from 'react-router-dom'
import "./Tile.css"

import star from "../assets/star.png"

function Tile({ title, year, img, rating, id }) {
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

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.target.firstChild.click()
    }
  }

  return (
    <li 
      data-cy={`${id}`}
      tabIndex={1}
      onKeyDown={e => handleKeyDown(e)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      >
      <Link to={`/${id}`}>
        <div className="img-container">
          <img 
            className={hovering ? `hover-animation tile-img` : 
              `tile-img`}
            src={img} 
            alt={title} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          {hovering && overlay}
        </div>
      </Link>
      <p className="tile-rating">{rating.toFixed(1)} 
        <img className="star" src={star}/>
      </p>
    </li>
  )
}

export default Tile