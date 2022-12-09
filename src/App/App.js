import React, { Component } from "react"
import "./App.css"
import AllMoviesView from "../AllMoviesView/AllMoviesView"
import DetailView from "../DetailView/DetailView"
import Header from "../Header/Header"
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      // movieId: null,
      movies: [],
      query: "",
      err: ""
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        if (!response.ok) {
          throw Error(response.ok)
        } else {
          return response.json()
        }
      })
      .then(({ movies }) => this.setState({ movies: movies}))
      .catch(err => this.setState({ err: err }))
  }

  // displayMovie = (id) => {
  //   this.setState({ movieId: id })
  // }

  // closeMovie = () => {
  //   this.setState({ movieId: null })
  // }

  updateQuery = input => {
    this.setState({ query: input })
  }

  render() {
    const errorMessage = <p className="error">Sorry, something went wrong. Please try again later.</p>

    return (
      <>
        <Header 
          updateQuery={this.updateQuery} 
          // movieId={this.state.movieId}
          err={this.state.err}
        />
        <main>
          {/* {this.state.movieId && <DetailView 
            movieId={this.state.movieId}
            closeMovie={this.closeMovie}
          />} */}
          {this.state.err && errorMessage}
        <Route
          exact path="/:id"
          render={({match}) => {
            return <DetailView movieId={match.params.id}/>
          }}
          />
        <Route
          exact path="/"
          render={() => <AllMoviesView s
            movies={this.state.movies} 
            // displayMovie={this.displayMovie}
            query={this.state.query}
            />}
          />
        </main>
      </>
    )
  }
}

export default App