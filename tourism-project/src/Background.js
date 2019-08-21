import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from './img/Jeddah.jpg'
import image2 from './img/dammam.jpg'
import image3 from './img/Rayadh.jpg'
 
export default class Background extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
      </div>
    )
  }
}