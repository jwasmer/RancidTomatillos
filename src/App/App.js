import React, { Component } from "react"
import { Route } from "react-router-dom"

import "./App.css"
import AllMoviesView from "../AllMoviesView/AllMoviesView"
import DetailView from "../DetailView/DetailView"
import Header from "../Header/Header"

class App extends Component {
  constructor() {
    super()
    this.state = {
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

  updateQuery = input => {
    this.setState({ query: input })
  }

  render() {
    const errorMessage = <p className="error">Sorry, something went wrong. Please try again later.</p>

    return (
      <>
        <Header 
          updateQuery={this.updateQuery} 
          err={this.state.err}
        />
        <main>
          {this.state.err && errorMessage}
          <Route
            exact path="/:id"
            render={({ match }) => {
              return <DetailView movieId={match.params.id} />
            }}
          />
          <Route
            exact path="/"
            render={ () => <AllMoviesView
              movies={this.state.movies} 
              query={this.state.query}
            />}
          />
        </main>
      </>
    )
  }
}

export default App