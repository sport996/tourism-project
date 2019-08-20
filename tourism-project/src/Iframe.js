import React, {Component} from 'react';
import "../src/App.css";
import "../src/index.css";

export default class Iframe extends Component{

render(){
    
    return(
        
        <div className='video'>
            
            <iframe onClick={this.props.getVideo} width="600" height="300"
            src={this.props.link} >
            </iframe>
            
        </div>
    );
    
}
}