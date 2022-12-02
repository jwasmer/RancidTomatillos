import React from "react"
import "./AllMoviesView.css"

import Tile from "../Tile/Tile"

function AllMoviesView({ allMovies, displayMovie }) {

  const tileComponents = allMovies.map(movie => {
    return <Tile
      title={movie.title}
      img={movie.poster_path}
      rating={movie.average_rating}
      id={movie.id}
      key={movie.id}
      displayMovie={displayMovie}
    />
  })

  return (
    <ul>
      {tileComponents}
    </ul>
  )
}

export default AllMoviesView