import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../src/App.css";

class Tour extends Component {
  render() {

    let city = this.props.nameCity.filter(
      elm => elm.id == this.props.match.params.id // Showing the city that matches the ParamsID
    );
    let newCity = city.map(elm => { // running map and show the values of the city
    let images = this.props.images.filter(image => image.city == elm.name);

    let allImages = images.map(image => {
        return (
          <a href={image.image_url}>
            <img src={image.image_url} alt="" />
          </a>
        );
      });

      return (
        <Container>
          <section className="tour-cover item-center">
            <h1>{elm.name}</h1>
            <img src={elm.picture} width="100%" height="100%" />
            <p>{elm.category}</p>
            <p> {elm.description}</p>
          </section>
          <section className="tour-info">
            <Row>
              <Col sm="8">
                <div className="tour-desc">
                  <h6> Population: {elm.population}</h6>

                  <h6> Weather: {elm.weather} </h6>
                  <h6>
                    {" "}
                    Location: <a href={elm.location}>{elm.location}</a>{" "}
                  </h6>
                  <h5>Activities:</h5>
                  <br />
                  <p>{elm.activities}</p>
                </div>
              </Col>

              <Col sm="4">
                <div className="tour-gallery">{allImages}</div>
              </Col>
            </Row>
          </section>
        </Container>
      );
    });

    return <div className="subComponent">{newCity}</div>;
  }
}
export default Tour;
