import React, { Component } from 'react';
import Map from './Components/Map'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Map position={[52.101035484049724, 23.77022445201874]}/>
      </div>
    );
  }
}

export default App;
