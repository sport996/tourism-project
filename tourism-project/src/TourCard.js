import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import "../src/App.css";

const TourCard = ({ tourcard }) => {
  const { picture, name, id} = tourcard;
  return (
    <Card>
      <CardImg top width="100%" height="100%" src={picture}  />
      <CardBody>
        <Button outline color="secondary" className="float-right" href={`/${id}/`}>
          Read more 
        </Button>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;
