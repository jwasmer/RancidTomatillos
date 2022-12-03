import React, { Component } from "react"
import "./DetailView.css"

class DetailView extends Component {
  constructor(props) {
    super(props)
    this.movieId = this.props.movieId
    this.closeMovie = this.props.closeMovie
    this.state = {
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.movieId}`)
      .then(response => response.json())
      .then(movieObject => {
        const data = movieObject.movie

        this.setState({
          averageRating: data.average_rating,
          backdropPath: data.backdrop_path,
          budget: data.budget,
          genres: data.genres,
          id: data.id,
          overview: data.overview,
          posterPath: data.poster_path,
          releaseDate: data.release_date,
          revenue: data.revenue,
          runtime: data.runtime,
          tagline: data.tagline,
          title: data.title
        })
      })
  }
}

export default DetailView