import React, {Component} from 'react';

export default class AllVideos extends Component{

render(){
    return(
        <div>
            <iframe width="420" height="320"
            src={this.props.vid} >
            </iframe>
        </div>
    );
    
}
}
