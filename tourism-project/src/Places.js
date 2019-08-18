import React, {Component} from 'react';
import axios from 'axios';

export default class Places extends Component {
  // Constructor
  state = {
    name: "",
    image: ""
  }
  componentDidMount(){
      axios({
          method: "GET",
          url: ""
      })
      .then(response =>{
          console.log(response)
          this.setState({
            name: response.data.xxxx,
            image: response.data.image,
            // https://dog.ceo/api/breeds/image/random Fetch!
            message: response.data.image
          })
      })
  }
  render(){

    return(
        <div>
            <div>
                <h1>{this.state.name}</h1>
                <img src={`startOfLink ${this.state.image}`} alt={`${this.state.name} Image`} />
            </div>

            <div name="Tourism Places">
                {/* <h1>Tourism Places:</h1> */}
                {/* {allPlaces} Don't forget the array */}
            </div>
        </div>

    );
  }
}