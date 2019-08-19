import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
          url: "https://pixabay.com/api/?key=13352675-ccd96ebbc533b34c0a3a93225"
      })
      .then(response =>{
          console.log(response)
          this.setState({
            // name: response.data.xxxx,
            image: response.data.hits[10].largeImageURL
          })
      })
  }
  
  render(){

    return(

        <div>
            {/* <div name="Name">
              { <h1>City Name: {this.state.name}</h1> }
            </div> */}
            {/* {console.log(this.state.image)} */}
            <img src={this.state.image} />
            {/* Links part in untiled file */}
              <Router>
                <Link to="/Info">Information</Link>
                {'  '}
                <Link to="/Places">Places</Link> 
                {'  '}
                {/* Determine what places should show.. Rest. or places.. */}
                <Link to="/Places">Restaurants</Link>
              </Router>

            <div name="Info">
              {/* <Info /> */}
            </div>
            
            <div name="TourismPlaces">
              {/* <Places /> Specify that it's places */}
            </div>

            <div name="Rest">
              <h1>Restaurants</h1>
              {/* Specify that it's rest. and change by if condition the content of header*/}
              {/* <Places />  */}
            </div>

            {/* <CityImage /> */}



        </div>
        
    );
  }

}