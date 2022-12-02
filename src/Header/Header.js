import React, { Component } from "react"

import "./Header.css"
import logo from "../assets/rt_logo.png"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({ search: value })
    this.props.updateQuery(value)
  }

  render() {
    const searchBar = <div>
    <i className="material-symbols-outlined">search</i>
    <input 
      type="search" 
      name="search"
      placeholder="search by title" 
      value={this.state.search}
      onChange={(e) => this.handleChange(e)}
    />
    </div>

    return (
      <header>
        <div className="header-left">
          <img className="logo" src={logo}/>
          <h1>RANCID <br />TOMATILLOS</h1>
        </div>
        <div className="header-right">
          {!this.props.movieId && searchBar}
        </div>
      </header>
    )
  }
}

export default Header