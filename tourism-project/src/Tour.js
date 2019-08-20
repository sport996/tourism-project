import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import tours from "./Package";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";


const Tour = () => (
  
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Ala'a</h1>
        <h4>Ala'a Mountan</h4>
        <p> In almost no time, the city of Al-Ula in northwest Saudi Arabia went
              from being relatively unknown to a very early symbol of success for
              the Kingdom’s ambitious Vision 2030 reform plan. Not many places in
              the world can say they are sitting on 3,000 years of history, which is
              the case with Al-Ula, which is home to the UNESCO World Heritage
              Site of Madain Saleh.
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
  </div>

);

export default Tour;
