import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <Container  hogs={hogs}/>

      </div>
    )
  }
}

export default App;
