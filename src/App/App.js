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
      <main className="App">
        <Tiles tiles={this.state.tiles}/>
      </main>
    )
  }
}

export default App;
