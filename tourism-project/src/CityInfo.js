import React, {Component} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import axios from 'axios';
import CityImage from './CityImage';

// import Routers from './Routers';
import Info from './Info';
import Places from './Places';

// import axios from 'axios';
export default class CityInfo extends Component {
  // Constructor
  state = {
    name: "",
    image: ""
  }
  // Getting the image of the city
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
            <div name="Name">
              <h1>City Name: {this.state.name}</h1>
            </div>

            {/* Links part in untiled file */}

            <div name="Info">
              <Info />
            </div>
            
            <div name="TourismPlaces">
              <Places /> {/* Specify that it's places */}
            </div>

            <div name="Rest">
              <h1>Restaurants</h1>
              {/* Specify that it's rest. and change by if condition the content of header*/}
              <Places /> 
            </div>

            <CityImage />



        </div>
        
    );
  }

}