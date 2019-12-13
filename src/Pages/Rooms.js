import React from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";

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
    <div className="about1">
      <Jumbotron fluid className="jumbotron" style={{ height: "590px" }}>
        <Container>
          <br />
          <br />

          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
              height: "auto"
            }}
            src={jcover1}
            alt="cover jumbotron 1"
          />
          <br />
          <br />
          <p
            className="text-center jtext"
            style={{
              color: "white",
              fontSize: "100px",
              fontFamily: "Playfair Display",
              lineHeight: "90px",
              verticalAlign: "baseline",
              letterSpacing: "5px",
              wordSpacing: "0",
              fontWeight: "700"
            }}
          >
            Rooms
          </p>

          <br />
          <br />
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            src={jcover2}
            alt="cover jumbotron 1"
          />
        </Container>
      </Jumbotron>

      <Container style={{ backgroundColor: "white" }}>
        <Row
          style={{
            height: "120px",
            boxShadow: "0 13px 43px 0 rgba(37, 46, 89, 0.1)"
          }}
        >
          <Col
            lg={3}
            xs={12}
            md={6}
            style={{
              backgroundColor: "white",
              marginTop: "25px",
              color: "#1e1e1e",
              fontFamily: "monserrat"
            }}
          >
            CHECK-IN
            <br />
            <input type="date" className="date"></input>
          </Col>
          <Col
            lg={3}
            xs={12}
            md={6}
            style={{
              backgroundColor: "white",
              marginTop: "25px"
            }}
          >
            CHECK-OUT
            <br />
            <input type="date" className="date"></input>
          </Col>
          <Col
            lg={3}
            xs={12}
            md={6}
            style={{
              marginTop: "0",
              backgroundColor: "white"
            }}
          >
            <br />
            GUEST
            <br />
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" className="date">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col
            lg={3}
            xs={12}
            md={6}
            style={{ backgroundColor: "#C99635" }}
            className="booknow"
          >
            <p
              className="booknow1"
              style={{
                // backgroundColor: "#C99635",
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "56px",
                color: "#ffffff",
                fontFamily: "Monserrat",
                fontWeight: "700",
                fontSize: "24px"
              }}
            >
              book now
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "150px" }} className="listrom">
        <Row>
          <Col className="text-center">
            <p
              style={{
                fontSize: "19px",
                fontFamily: "monserrat",
                color: "grey",
                lineHeight: "1px"
              }}
            >
              CHOOSE FOR YOURSELF
            </p>
            <p
              style={{
                fontSize: "50px",
                color: "#cb9734",
                fontFamily: "playfair display",
                marginBottom: "30px"
              }}
            >
              Best Room
            </p>
            <img src={jcover2} alt="wlwl"></img>
          </Col>
        </Row>

        {roomCards}
      </Container>
    </div>
  );
}
