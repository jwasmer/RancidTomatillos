import React from "react"
import "./Tile.css"

function Tile({ title, img, rating, id, displayMovie }) {
  return (
    <li>
      <img src={img} alt={title} onClick={() => displayMovie(id)}/>
      <p>{rating} ⭐️</p>
    </li>
  )
}

export default Tile