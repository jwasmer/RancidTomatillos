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
          releaseYear: data.release_date.slice(0, 4),
          revenue: data.revenue,
          runtime: data.runtime,
          tagline: data.tagline,
          title: data.title
        })
      })
  }

  render() {
    return <>
      <section className="details-container" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,1) 100%),
url(${this.state.backdropPath})`}}>
        <img className="poster" src={this.state.posterPath} alt={`Artwork for the movie ${this.state.title}`}/>
        <div className="text-container">
          <h2 className="title">{`${this.state.title} (${this.state.releaseYear})`}</h2>
          <h3 className="genres">{this.state.genres}</h3>
          <p className="tagline">{this.state.tagline}</p>
          <p className="rating">{this.state.averageRating}</p>
          <p className="overview">{this.state.overview}</p>
          <p className="movie-info">{this.state.runtime}</p>
          <p className="movie-info">{this.state.releaseDate}</p>
          <p className="movie-info">{this.state.budget}</p>
          <p className="movie-info">{this.state.revenue}</p>
        </div>
      </section>
      <iframe className="video-embed" src="https://www.youtube.com/embed/SUXWAEX2jlg" title="Fight Club Trailer - HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button onClick={() => {this.closeMovie()}}>Close Movie</button>
    </>
  }
}

export default DetailView