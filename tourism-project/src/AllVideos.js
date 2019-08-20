import React, {Component} from 'react';
import axios from 'axios';

export default class AllVideos extends Component{

render(){
    console.log()
    return(
        <div>
            <iframe width="420" height="320"
            src={this.props.task} >
            </iframe>
        </div>
        
    );
    
}
}
