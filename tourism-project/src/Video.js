import React, {Component} from 'react';
import axios from 'axios';
import AllVideos from './AllVideos';
import Iframe from './Iframe';
import ItemsCarousel from 'react-items-carousel';

export default class Video extends Component{
    state ={
        ids: ['B38SHiCHCgI', 'g2Na82FqROo', 'lihLRwa5ZLw','LuKzTODYOgE','OEJ8suXoGhU','g3KTlbrAdyI','bt7vNryFGIw'],
        name: [],
        fullVidLink: [],
        thumpnails: [],
        currentLink: "https://www.youtube.com/embed/B38SHiCHCgI"
    }

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
<<<<<<< HEAD
        <div className='container'>
            {videos}
=======
{/*  */}
        <div className='container '>
        <div style={{"padding":"0 60px","maxWidth":1000,"margin":"0 auto"}}>
  <ItemsCarousel
    placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
    enablePlaceholder={true}
    numberOfPlaceholderItems={3}
    numberOfCars={3}
    gutter={12}
    slidesToScroll={2}
    chevronWidth={100}
    outsideChevron={true}
    showSlither={false}
    firstAndLastGutter={false}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={'>'}
    leftChevron={'<'}
  >
    {videos}
  </ItemsCarousel>
</div>
            {/* {videos} */}
>>>>>>> 28e037ab91f2d2b4cd60b7c46eff7821e6f4e85b
     <br/> <br/>
        </div>

        {/*  */}
        </div>
        
    );


}
}

