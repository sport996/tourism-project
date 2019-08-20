import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import NavbarMain from "./Navbar";
import Home from "./Home";
import Tour from "./Tour";
import axios from 'axios';


class App extends Component {
  state = {
    nameCity:[]
  };
  componentDidMount() {
    axios ({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://tourism-project-sei.herokuapp.com/cities.json"
    })
    
    .then(response => { 
        this.setState({
          nameCity: response.data
        })
  }).catch(arr=> {
    console.log(arr)
  })
  }
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <BrowserRouter>
        
          <Route path="/tour/:id"  render={(props) => <Tour {...props} nameCity={this.state.nameCity} />}/>
          <Route path="/" exact render={(props) => <Home {...props} nameCity={this.state.nameCity} />}/>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
