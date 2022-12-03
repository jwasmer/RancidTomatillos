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

  render() {
    return <>
      <p>{this.movieId}</p>
      <p>{this.state.averageRating}</p>
      <img className="backdrop" src={this.state.backdropPath} alt={`Artwork for the movie ${this.state.title}`}/>
      <p>{this.state.budget}</p>
      <p>{this.state.genres}</p>
      <p>{this.state.overview}</p>
      <img className="poster" src={this.state.posterPath} alt={`Artwork for the movie ${this.state.title}`}/>
      <p>{this.state.releaseDate}</p>
      <p>{this.state.revenue}</p>
      <p>{this.state.runtime}</p>
      <p>{this.state.tagline}</p>
      <p>{this.state.title}</p>
      <button onClick={() => {this.closeMovie()}}>Close Movie</button>
    </>
  }
}

export default DetailView