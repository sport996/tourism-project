import React, {Component} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import axios from 'axios';
import CityImage from './CityImage';
// import Routers from './Routers';
// import Info from './Info';
// import Places from './Places';

// import axios from 'axios';
export default class CityInfo extends Component {
  // Constructor
  state = {
    name: "",
    image: ""
  }
  // Getting the picture of the city
  componentDidMount(){
      axios({
          method: "GET",
          url: ""
      })
      .then(response =>{
          console.log(response)
          this.setState({
            name: response.data.xxxx,
            image: response.data.xxxx
          })
      })
  }
  
  render(){

    return(

        <div>
            <div name="Information">
            <h1>City Name: {this.state.name}</h1>
            </div>
            <CityImage />
        </div>
        
    );
  }

}