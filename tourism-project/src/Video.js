import React, {Component} from 'react';
import axios from 'axios';
import AllVideos from './AllVideos';

export default class Video extends Component{
    state ={
        ids: ['B38SHiCHCgI', 'g2Na82FqROo', 'lihLRwa5ZLw'],
        name: [],
        fullVidLink: []
    }
// https://www.googleapis.com/youtube/v3/videos?part=player&id={videoId}&key=api key
// "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBXeIljl7VKhnQnr1qTkGWfY-cmjbta_78&part=snippet,statistics"
componentDidMount(){
    for (let i = 0; i < this.state.ids.length; i ++) {
        axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/videos?id=${this.state.ids[i]}&key=AIzaSyBXeIljl7VKhnQnr1qTkGWfY-cmjbta_78&part=snippet,statistics`
        })
    .then(response => {
        console.log(response)
        let seta = {...this.state}
        seta.name.push(response.data.items[0].snippet.title)
        seta.fullVidLink.push('https://www.youtube.com/embed/' + this.state.ids[i]) // name and title by res.

        this.setState(seta)

        // this.setState({
        //   video: response.data.items[0].id
        // })
    })
    }
  
}
render(){


    const videos = this.state.fullVidLink.map  ((elem, index) => {
        return <AllVideos task= {elem} key={index} />
        
    } );

    return(
        <div>
            {videos}
            
        </div>
    );
}
}
