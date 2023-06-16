import React, { Component } from 'react';
import './App.css';
import Video from './pages/Video'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='app__videos'>
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    );
  }
}

export default App;
