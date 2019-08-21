import React ,{Component} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../src/App.css";
import tours from "./Package";
import imgCard1 from "./img/img-card (1).jpg";
import imgCard2 from "./img/img-card (2).jpg";
import imgCard3 from "./img/img-card (3).jpg";
import imgCard4 from "./img/img-card (4).jpg";


class Tour extends Component {

  render(){

    


  let city = this.props.nameCity.filter(elm=> elm.id == this.props.match.params.id)
  let newCity = city.map(elm=>{
    let images = this.props.images.filter(image=>image.city == elm.name)

    let allImages = images.map(image=>{
      return (<a href={image.image_url}>
      <img src={image.image_url} alt="" />
    </a>)
    })
    return(  <Container>
      <section className="tour-cover item-center">
        <h1>{elm.name}</h1>
        <img src={elm.picture} width="720" height='360'/>
        <p>{elm.category}</p>
        <p> {elm.description}</p>
        
        
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
             
            <h4></h4>
            <h5> Population: {elm.population}</h5>
            
            <h5> Weather: {elm.weather} </h5>
            <h5> Location: <a href={elm.location}>{elm.location}</a> </h5>
           <h5>Activities:{elm.activities} </h5>
            

            </div>
          </Col>

          <Col sm="4">
            <div className="tour-gallery">
              {allImages}
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    )
    })

    return (
      <div className="subComponent">
        {newCity}
      </div>

    )

  }
}
export default Tour;
