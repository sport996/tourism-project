import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../src/App.css";

// activities: "{"King Fahd's Fountain"=>"This 853-foot fountain is reputed to be the tallest fountain in the world, and is best appreciated when illuminated at night.", "Masmak Fortress"=>"Once the mud citadel in the heart of Old Riyadh, the Musmak Palace was built around 1865 and extensively renovated in the 1980s. It is a square shaped fortified castle consisting of watch towers on all its corners and very thick walls. Inside the mud fortress there's a nicely reconstructed traditional diwan (sitting room) with an open courtyard and a well, which is functional. "}"
// category: "Desert"
// created_at: "2019-08-20T13:33:33.854Z"
// description: "Riyadh is the capital of Saudi Arabia and one of the most populated cities in the Arab world. The city’s name is derived from the plural of “rawḍah”, meaning gardens or meadows, so named for a natural fertility provided by its location at the juncture of Wadis Ḥanifah and Al-Baṭḥa. Riyadh is famous for its gardens and natural oases that surround it amid the desert, mountains and plains of Tuwaiq."
// id: 83
// location: null
// name: "Riyadh"
// picture: "a"
// population: "7 million "
// updated_at: "2019-08-20T13:33:33.854Z"
// url: "https://tourism-project-sei.herokuapp.com/cities/83.json"
// weather: "Summer(40-50) Winter (18-24)"

const TourCard = ({ tourcard }) => {
  const { picture, name, id} = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={picture}  />
      <CardBody>
        <Button outline color="secondary" className="float-right" href={`tour/${id}`}>
          Read more 
        </Button>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;
