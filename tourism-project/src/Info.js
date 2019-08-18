import React, {Component} from 'react';

import axios from 'axios';


export default class Info extends Component {
  // Constructor
  state = {
    name: "",
    info: ""
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
            info: response.data.xxx
          })
      })
  }
  
  render(){

    return(
      <div>
        <div name="Information">
          <h1>City Information: {this.state.info}</h1>
          
        </div>
      </div>
    );
  }

}