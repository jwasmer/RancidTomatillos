import { keyboard } from "@testing-library/user-event/dist/keyboard"
import React, { Component } from "react"
import "./DetailView.css"
import backButton from "../assets/back-button.png"

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
        const releaseDateObject = new Date(Date.parse(data.release_date))
        const dateData = `${releaseDateObject.toLocaleString('default', { month: 'long' })} ${releaseDateObject.getDate()}, ${releaseDateObject.getFullYear()}`
        const dateYear = releaseDateObject.getFullYear()

        this.setState({
          averageRating: data.average_rating,
          backdropPath: data.backdrop_path,
          budget: data.budget.toLocaleString(),
          genres: data.genres.join(' '),
          id: data.id,
          overview: data.overview,
          posterPath: data.poster_path,
          releaseDate: releaseDateObject,
          dateData: dateData,
          dateYear: dateYear,
          revenue: data.revenue.toLocaleString(),
          runtime: data.runtime,
          title: data.title
        })
      })

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.movieId}/videos`)
      .then(response => response.json())
      .then(videoObject => {
        const data = videoObject.videos[0]
        const isEmbedAvailable = data === [] ? false : true
        if (isEmbedAvailable) {
          this.setState({
            videoUrl: data.key
          })
        }
      })
  }

  render() {
    return <>
      <section className="details-container" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,1) 100%),
url(${this.state.backdropPath})`}}>
        <button className="back-btn" onClick={() => {this.closeMovie()}}><img className="btn-icon" src={backButton} alt="An arrow pointing left"/></button>
        <img className="poster" src={this.state.posterPath} alt={`Artwork for the movie ${this.state.title}`}/>
        <div className="text-container">
          <h2 className="title">{`${this.state.title} (${this.state.dateYear})`}</h2>
          <h3 className="genres">{this.state.genres}</h3>
          <p className="overview">{this.state.overview}</p>
          <p className="movie-info">{this.state.runtime} minutes</p>
          <p className="movie-info">release date: {this.state.dateData}</p>
          <p className="movie-info">budget: ${this.state.budget}</p>
          <p className="movie-info">box office: ${this.state.revenue}</p>
        </div>
        <p className="rating">average rating: {Math.round(this.state.averageRating)} ⭐️</p>
      </section>
      {this.state.videoUrl && <iframe className="video-embed" src={`https://www.youtube.com/embed/${this.state.videoUrl}`} title="Fight Club Trailer - HD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
    </>
  }
}

export default DetailView