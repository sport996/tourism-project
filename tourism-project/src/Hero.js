import React from "react";
import  {Component} from 'react';
import "../src/App.css";

var img = ["https://www.sauditourism.sa/ar/aboutKSA/Regions/Riyadh/PublishingImages/Riyadh.jpg" , 
"https://www.sauditourism.sa/ar/aboutKSA/Regions/Jeddah/PublishingImages/JeddahBanner.jpg"]
var i = 0;

class Hero extends Component{
state = {
    img : ["https://www.sauditourism.sa/ar/aboutKSA/Regions/Riyadh/PublishingImages/Riyadh.jpg" , 
"https://www.sauditourism.sa/ar/aboutKSA/Regions/Jeddah/PublishingImages/JeddahBanner.jpg",
"https://www.sauditourism.sa/ar/aboutKSA/Regions/Tabuk/PublishingImages/TaboukBG.jpg",
"https://www.sauditourism.sa/ar/aboutKSA/Regions/Jouf/PublishingImages/JoufBG.jpg",
"https://www.sauditourism.sa/ar/ExploreKSA/AttractionSites/AlAhsaOasis/PublishingImages/AlahsaOases.jpg"],
i : ""

  }

  time =()=>{
    if (this.state.i === 4 ){
      this.setState({
        i : 0
      })
      
      console.log("is zero " +this.state.i )
    }
    else {
      var i = Number(this.state.i) + 1
      this.setState({
        i :  i 
      })
      console.log("is one " + this.state.i)
    
    }
    return img[i]
    }
componentDidMount (){
  setInterval(this.time, 2000)
}

  render(){
      return(
  
        <div>
        <main style = {{backgroundImage: `url(${this.state.img[this.state.i]})`}}  className="cover-page" id="hero">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>Tourism in Saudi Arabia</h1>
              <br></br>
              <h3>Tours | Travel | Guide</h3>
              <br></br>
              <div className="active-pink-3 active-pink-4 mb-4">
            <input className="form-control" type="text" placeholder="Where To (:" aria-label="Search" />
             </div>
            </div>
          </section>
        </main>
      </div>
      );
  
  }
  }

export default Hero;
