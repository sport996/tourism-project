import React, { Component } from 'react';
import './App.css';
import CityInfo from './CityInfo';
import Video from './Video';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
// import Routers from './Routers';

class App extends Component {
  render() {

    return (

      <div>
        <CityInfo />
        <Video />
      </div>
      
    );
    
  }
}

export default App;
