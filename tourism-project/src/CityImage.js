import React, {Component} from 'react';
import axios from 'axios';

export default class CityImage extends Component{
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
            image: ""
          })
      })
  }
    render(){

        return(

        <div name="Image">
            <img src={`the starting of the link ${this.state.image}`} alt={`City 
            ${this.state.name} Image`} />
        </div>
        
        );
      }
}