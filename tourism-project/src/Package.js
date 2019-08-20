import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
const tours = [
  {
    id: 1,
    category: ["Mountain"],
    img: imgCard1,
    alt: "blah blah",
    title: "Ala'a",
    subtitle: "Ala'a Mountan"
  },
  {
    id: 2,
    category: ["Sea"],
    img: imgCard2,
    alt: "blah blah",
    title: "Jeddah",
    subtitle: "The read sea"
  },
  {
    id: 3,
    category: ["Desert"],
    img: imgCard3,
    alt: "blah blah",
    title: "Raydh",
    subtitle: "The Capital of Saudi Arabia"
  },
  {
    id: 4,
    category: ["Sea"],
    img: imgCard4,
    alt: "blah blah",
    title: "Dammam",
    subtitle: ""
  },
  {
    id: 5,
    category: ["Mountain"],
    img: imgCard5,
    alt: "blah blah",
    title: "Abaha",
    subtitle: ""
  },
  {
    id: 6,
    category: ["Mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Taif",
    subtitle: ""
  },
  {
    id: 7,
    category: ["Mountain"],
    img: imgCard7,
    alt: "blah blah",
    title: "Asear",
    subtitle: ""
  },
  {
    id: 8,
    category: ["Desert"],
    img: imgCard8,
    alt: "blah blah",
    title: "Alahsa",
    subtitle: ""
  },
  {
    id: 9,
    category: ["Desert"],
    img: imgCard9,
    alt: "blah blah",
    title: "Hofof",
    subtitle: ""
  },
  {
    id: 10,
    category: ["Mountain"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Alqar Mountan",
    subtitle: ""
  }
];

const itemCategories = [
  "All",
  "Sea",
  "Mountain",
  "Desert",
  ""
];

class Package extends Component {
  state = {
    cards: [],
    category: "All"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>A BETTER WAY TO VISIT SAUDI ARABIA</h1>
            <p>CHOOSE YOUR ADVANTURE FROM OUR CATEGORY</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "All"
                  ? cards.map(tourcard => {
                      return tourcard.category.map(catItem => {
                        return catItem === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard} />
                        ) : null;
                      });
                    })
                  : cards.map(tourcard => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
