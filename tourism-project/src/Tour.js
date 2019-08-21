import React ,{Component} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../src/App.css";
import tours from "./Package";
import imgCard1 from "./img/img-card (1).jpg";
import imgCard2 from "./img/img-card (2).jpg";
import imgCard3 from "./img/img-card (3).jpg";
import imgCard4 from "./img/img-card (4).jpg";


class Tour extends Component {

  // state ={ 
  //   // name:"" ,
  //   // description :"",

  // }

  render() {



    let city = this.props.nameCity.filter(elm=> elm.id == this.props.match.params.id)
   let newCity = city.map(elm=>{
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
             
            
            <h6> Population: {elm.population}</h6>
            
            <h6> Weather: {elm.weather} </h6>
            <h6> Location: <a href={elm.location}>{elm.location}</a> </h6>
           <h5>Activities:</h5>
           <br></br>
           <p>{elm.activities}</p> 
            

            </div>
          </Col>

          <Col sm="4">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
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
