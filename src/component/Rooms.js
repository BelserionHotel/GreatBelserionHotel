import React from "react";
import { Jumbotron, Container, Row, Col, Form } from "react-bootstrap";
import "../App.css";
import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
export default function Rooms() {
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
            height: "150px",
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
              backgroundColor: "white",
              marginTop: "25px"
            }}
          >
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
            style={{ backgroundColor: "#C99635", transition: "0.5s" }}
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

      <Container style={{ marginTop: "150px" }}>
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
                marginBottom: "50px"
              }}
            >
              Best Room
            </p>
            <img src={jcover2} alt="wlwl"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
