import React from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      detailViewId: null,
      tiles: []
    }
  }

  openDetailView = (id) => {
    this.setState({ detailViewId: id })
  }

  closeDetailView = () => {
    this.setState({ detailViewId: null })
  }

  render() {
    return (
      <>
        <header className="Header">
          <p>Header Placeholder</p>
        </header>
        <main className="App">
          {!this.state.detailViewId && <AllMoviesView tiles={this.state.tiles} openDetailView={this.openDetailView}/>}
          {this.state.detailViewId && <DetailView movie={this.state.detailViewId} closeDetailView={this.closeDetailView}/>}
        </main>
      </>
    )
  }
}

export default App;
