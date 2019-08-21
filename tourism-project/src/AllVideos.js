import React, {Component} from 'react';
import "../src/App.css";
import "../src/index.css";

export default class AllVideos extends Component{

   video = ()=>{
    this.props.video(this.props.i)
   }

render(){

    return(

        <div  style = {{backgroundImage: `url(${this.props.vid})`}} class = "video" id ={this.props.i} onClick = {this.video}>

            <h4  class="names" style = {{color: "white" }}> {this.props.name[this.props.i]}</h4>
            <div style = {{color: "white"}}> <h1> {this.props.ele} </h1></div>
      
        </div>
   
    );
}
}

