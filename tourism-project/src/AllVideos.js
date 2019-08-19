import React, {Component} from 'react';

export default class AllVideos extends Component{

render(){
    console.log(this.props.task)
    return(
        <div>
            <iframe width="420" height="320"
            src={this.props.task} >
            </iframe>
        </div>
        
    );
    
}
}
