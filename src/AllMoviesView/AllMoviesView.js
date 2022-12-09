import React from "react"
import "./AllMoviesView.css"

import Tile from "../Tile/Tile"

function AllMoviesView({ movies, /* displayMovie, */ query }) {
  const displayedMovies = !query ? movies : 
  movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))

  const tileComponents = displayedMovies.map(movie => {
    return <Tile
      title={movie.title}
      year={movie.release_date}
      img={movie.poster_path}
      rating={movie.average_rating}
      id={movie.id}
      key={movie.id}
      // displayMovie={displayMovie}
    />
  })

  return (
    <ul>
      {tileComponents}
    </ul>
  )
}

export default AllMoviesView