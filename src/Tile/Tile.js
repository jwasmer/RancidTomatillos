import React from "react"
import "./Tile.css"

function Tile({ title, img, rating, id, displayMovie }) {
  return (
    <li>
      <div className="img-container">
        <img src={img} alt={title} onClick={() => displayMovie(id)}/>
      </div>
      <p>{rating} ⭐️</p>
    </li>
  )
}

export default Tile