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
        currentLink: "" 
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

getVideo(link) {
    this.setState({currentLink:'https://www.youtube.com/embed/'+link})
    }
render(){
    const videos = this.state.thumpnails.map  ((elem, index) => {
        return <AllVideos getVideo={()=>this.getVideo(elem.id)} vid= {elem.image} key={index} />

    } );
    return (
        <div>

          <Iframe link= {this.state.currentLink} />
        <div className='container'>

            {videos}
        </div>
        </div>
    );


}
}

