import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import NavbarMain from "./Navbar";
import Home from "./Home";
import Tour from "./Tour";
import axios from 'axios';

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
          {/* <Switch> */}
          <Route path="/:id"  component={(props) => <Tour {...props} images={this.state.images} nameCity={this.state.nameCity} />}/>
          <Route path="/" exact component={(props) => <Home {...props} nameCity={this.state.nameCity} />}/>
          {/* </Switch> */}
        </HashRouter>
       
      </div>
    );
  }
}

export default App;
