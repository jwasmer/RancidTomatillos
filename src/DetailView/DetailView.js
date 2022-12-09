import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./DetailView.css"
import backButton from "../assets/back-button.png"

class DetailView extends Component {
  constructor(props) {
    super(props)
    this.movieId = this.props.movieId
    this.closeMovie = this.props.closeMovie
    this.state = {}
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.movieId}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.ok)
        } else {
          return response.json()
        }
      })
      .then(movieObject => {
        const data = movieObject.movie
        const releaseDateObject = new Date(Date.parse(data.release_date))
        const dateData = `${releaseDateObject.toLocaleString("default", { month: "long" })} ${releaseDateObject.getDate()}, ${releaseDateObject.getFullYear()}`
        const dateYear = releaseDateObject.getFullYear()

        this.setState({
          averageRating: data.average_rating,
          backdropPath: data.backdrop_path,
          budget: data.budget.toLocaleString(),
          genres: data.genres.join(" | "),
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
      .catch(err => this.setState({ err: err }))

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.movieId}/videos`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.ok)
        } else {
          return response.json()
        }
      })
      .then(({ videos }) => {
        if (videos.length) {
          this.setState({
            videoUrl: videos[0].key
          })
        }
      })
      .catch(err => this.setState({ err: err }))
  }

  render() {
    const errorMessage = <p className="error">Sorry, something went wrong. Please try again later.</p>

    return <>
      <section 
        data-cy="backdrop"
        className="details-container" 
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,1) 100%), url(${this.state.backdropPath})`
      }}>
        <Link to="/"><button 
          data-cy="back-btn"
          className="back-btn" 
          // onClick={() => { this.closeMovie() }}
          >
            <img 
              className="btn-icon" 
              src={backButton} 
              alt="An arrow pointing left" />
        </button></Link>
        <img 
          data-cy="poster"
          className="poster" 
          src={this.state.posterPath} 
          alt={`Artwork for the movie ${this.state.title}`} />
        <div className="text-container">
          <h2 data-cy="title" className="title">{`${this.state.title} (${this.state.dateYear})`}</h2>
          <h3 data-cy="genres" className="genres">{this.state.genres}</h3>
          <p data-cy="overview" className="overview">{this.state.overview}</p>
          <table data-cy="info-table">
            <tbody>
              <tr>
                <td className="movie-info">runtime: </td>
                <td data-cy="runtime" className="movie-info">{this.state.runtime} minutes</td>
              </tr>
              <tr>
                <td className="movie-info">release date: </td>
                <td data-cy="release-date" className="movie-info">{this.state.dateData}</td>
              </tr>
              <tr>
                <td className="movie-info">budget: </td>
                <td data-cy="budget" className="movie-info">${this.state.budget}</td>
              </tr>
              <tr>
                <td className="movie-info">box office: </td>
                <td data-cy="revenue" className="movie-info">${this.state.revenue}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p data-cy="rating" className="rating">average rating: {Math.round(this.state.averageRating)} ⭐️</p>
      </section>

      {this.state.videoUrl && <iframe data-cy="video-embed" className="video-embed" src={`https://www.youtube.com/embed/${this.state.videoUrl}`} title={this.state.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}

      {this.state.err && errorMessage}
    </>
  }
}

export default DetailView