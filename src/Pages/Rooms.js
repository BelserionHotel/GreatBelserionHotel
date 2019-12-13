import React, { Fragment } from "react";

import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Header from "../component/Header";
import RoomCard from "../component/RoomCard";

export default function Rooms() {
  const roomData = [
    {
      name: "Standard Single Room",
      description:
        "Standard Single Rooms are designed in open-concept living area and have many facilities",
      info: {
        adults: 2,
        view: "swimming pool",
        size: 30,
        bedType: "queen bed",
        categories: "single",
        amenities:
          "air-conditioning, free wi-fi, hairdryer, in-room safety,laundry, minibar, telephone"
      }
    },
    {
      name: "Classic Double Room",
      description:
        "Classic Double Rooms are perfectly equipped for traveling couples or friends.",
      info: {
        adults: 4,
        view: "swimming pool",
        size: 50,
        bedType: "queen bed",
        categories: "double",
        amenities:
          "air-conditioning, free wi-fi, hairdryer, in-room safety,laundry, minibar, telephone"
      }
    },
    {
      name: "Superior Double Room",
      description:
        "Have lots of in-room facilities and are designed in open-concept living area.",
      info: {
        adults: 4,
        view: "beach",
        size: 50,
        bedType: "queen bed",
        categories: "double",
        amenities:
          "air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone"
      }
    },
    {
      name: "Comfort Triple Room",
      description:
        "Perfectly suitable for family vacation or for big companies.",
      info: {
        adults: 6,
        view: "beach",
        size: 50,
        bedType: "queen beach",
        categories: "double",
        amenities:
          "air-conditioning, free wi-fi, hairdryer, in-room safety,laundry, minibar, telephone"
      }
    }
  ];

  var roomCards = roomData.map(data => {
    return <RoomCard roomData={data} />;
  });

  return (
    <Fragment>
      <Header jumbotronUpperText="Room List" />
      <Container>{roomCards}</Container>
    </Fragment>
  );
}
