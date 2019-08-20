import React ,{Component} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../src/App.css";
import tours from "./Package";
import imgCard1 from "./img/img-card (1).jpg";
import imgCard2 from "./img/img-card (2).jpg";
import imgCard3 from "./img/img-card (3).jpg";
import imgCard4 from "./img/img-card (4).jpg";


class Tour extends Component {

  state ={ 
    name:"" ,
    description :""
  }

  render() {



    let city = this.props.nameCity.filter(elm=> elm.id == this.props.match.params.id)
   let newCity = city.map(elm=>{
    return(  <Container>
      <section className="tour-cover item-center">
        {/* <img src={} alt="" />  */}
        <h1>{elm.name}</h1>
        <h4>Ala'a Mountan</h4>
        <p> {elm.description}
    </p>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Population: 32,500
            <br></br>
                Weather: summer(37- 43) winter (12-20)
            <br></br>

              </p>
              <h4>Activities:</h4>
              <li>Winter at Tantora</li>
              <p>It is a music festival, which was sold out every night between
                 December and February as visitors flocked to see legends such
                 as Andrea Bocelli, Yanni, Mohammed Abdo and Majida
                 El-Roumi perform. The people of Al-Ula hosted 37,000 visitors
                 from 72 countries around the world during the first successful
                 annual Winter at Tantora festival.
           </p>
              <li>Hot Air Balloon</li>
              <p>This festival presented a blueprint for adventure tourism in
                 Saudi Arabia. Next, the Dakar Rally will take place there in 2020.
             </p>

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
