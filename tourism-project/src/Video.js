import React, {Component} from 'react';
import axios from 'axios';
import AllVideos from './AllVideos';
import Iframe from './Iframe';

export default class Video extends Component{
    state ={
        ids: ['B38SHiCHCgI', 'g2Na82FqROo', 'lihLRwa5ZLw','LuKzTODYOgE','OEJ8suXoGhU','g3KTlbrAdyI','bt7vNryFGIw'],
        name: [],
        fullVidLink: [],
        thumpnails: [],
        currentLink: "https://www.youtube.com/embed/B38SHiCHCgI"
    }
// "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBXeIljl7VKhnQnr1qTkGWfY-cmjbta_78&part=snippet,statistics"
componentDidMount(){
    for (let i = 0; i < this.state.ids.length; i ++) {
        axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/videos?id=${this.state.ids[i]}&key=AIzaSyAwslADzrvgOWagrSOaSm3ac8AanC7J2zM&part=snippet,statistics`
        })
    .then(response => {
        console.log(response)
        let seta = {...this.state}
        seta.name.push(response.data.items[0].snippet.title)
        seta.thumpnails.push({image: response.data.items[0].snippet.thumbnails.medium.url, id:this.state.ids[i]})
        seta.fullVidLink.push('https://www.youtube.com/embed/' + this.state.ids[i]) // name and title by res.
        console.log(response.data.items[0].snippet.thumbnails.medium.url)

        this.setState(seta)
     
    })
    }
}

getVideo = (i) => {

    console.log("stop")
    this.setState({
        currentLink : this.state.fullVidLink[i]
    })

    }
render(){
    const videos = this.state.thumpnails.map  ((elem, i) => {
        return <AllVideos video={this.getVideo} vid= {elem.image} i={i} name ={this.state.name} />
    } ); 
    return (
        <div className='videoTitle'>
          <h2>Explore More</h2>
          <Iframe link= {this.state.currentLink} />
        <div className='container flex'>
    
            {videos}
     <br/> <br/>
        </div>
        </div>
        
    );


}
}

