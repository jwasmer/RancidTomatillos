import React, { Component, createRef } from "react"

import "./Header.css"
import logo from "../assets/rt_logo.png"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      searchHidden: true,
      searchInput: createRef(),
      isMobileDevice: window.matchMedia("(max-width: 475px)").matches
    }
  }

  componentDidMount() {
    const handler = e => this.setState({ 
      isMobileDevice: e.matches,
      searchHidden: false
     })
    window.matchMedia("(max-width: 475px)").addEventListener('change', handler)
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({ search: value })
    this.props.updateQuery(value)
  }

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.handleIconClick()
    }
  }

  handleIconClick = () => {
    this.setState({ searchHidden: false })
    this.state.searchInput.current.focus()
  }

  render() {
    const searchBar = 
    <div className="input-container">
      <i 
        className={!this.state.searchHidden ? 
          `material-symbols-outlined icon-transition` :
          `material-symbols-outlined`
        }
        onClick={this.handleIconClick}
        onKeyDown={(e) => this.handleKeyDown(e)}
        tabIndex={1}
      >search</i>
      <input 
        className={!this.state.searchHidden ? 
          `search-input input-transition` : 
          `search-input`
        }
        type="search" 
        name="search"
        placeholder="search by title" 
        value={this.state.search}
        tabIndex={1}
        onChange={(e) => this.handleChange(e)}
        ref={this.state.searchInput}
      />
    </div>

    const displaySearchOK = !this.props.movieId && !this.props.err

    return (
      <header>
        <div className="header-left">
          <div className="title-container">
            <img 
              className="logo" 
              src={logo}
              alt="Rancid Tomatillos logo"
            />
            <h1>RANCID <br />TOMATILLOS</h1>
          </div>
        </div>
        <div className="header-right">
          {displaySearchOK && searchBar}
        </div>
      </header>
    )
  }
}

export default Header