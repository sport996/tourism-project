import React, {Component} from 'react';
import "../src/App.css";
import "../src/index.css";

export default class AllVideos extends Component{

    handle
render(){
    
    return(
        <div className='video'>

        <img onClick={this.props.getVideo} width="200" height="150"
        src={this.props.vid} 

        />

    </div>
);

}
}

