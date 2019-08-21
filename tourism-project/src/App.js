import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'
import NavbarMain from "./Navbar";
import Home from "./Home";
import Tour from "./Tour";
import axios from 'axios';
// import Background from 'background';


class App extends Component {
  state = {
    nameCity:[],
    images: []
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

  axios ({
    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://tourism-project-sei.herokuapp.com/images.json"
  })
  .then(response => { 
      this.setState({
        images: response.data
      })
}).catch(arr=> {
  console.log(arr)
})
  }
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <HashRouter>

          <Route path="/" exact render={(props) => <Home {...props} nameCity={this.state.nameCity} />}/>
          <Route path="/tour/:id"  render={(props) => <Tour {...props} images={this.state.images} nameCity={this.state.nameCity} />}/>
        
        </HashRouter>
       
      </div>
    );
  }
}

export default App;
