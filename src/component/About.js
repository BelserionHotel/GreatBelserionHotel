import React from "react";
import { Redirect } from "react-router-dom";

import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";
import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
export default function About() {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
<React.Fragment>{token ?
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
            About
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

      <Container>
        <Row className="text-center">
          <Col>
            <div>
              <p
                style={{
                  color: "#1e1e1e",
                  fontSize: "19px",
                  marginTop: "50px",
                  fontFamily: "Montserrat"
                }}
              >
                WHY CHOOSE US
              </p>
              <h1
                style={{
                  color: "#cb9734",
                  fontSize: "50px",
                  // width: "57%",
                  marginTop: "30px"
                }}
              >
                Experience the Splendour of TheGem Hotel!
              </h1>
              <img src={jcover2} alt="wkwk" style={{ marginTop: "10px" }} />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col ls={6}>
            <p
              style={{
                color: "#5e6666",
                fontFamily: "Open Sans Condensed ",
                fontSize: "28px"
              }}
              className="textabout"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque. laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
              <br />
            </p>
          </Col>
          <Col lg={6}>
            <img
              src={img2}
              alt="wkwkwk"
              style={{
                width: "100%",
                height: "80%",
                backgroundSize: "cover"
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col
            lg={12}
            style={{
              color: "#5e6666",
              fontFamily: "Open Sans Condensed ",
              fontSize: "28px"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Col>
        </Row>
      </Container> 
    </div>: <Redirect to="/signin" />}
    </React.Fragment>
  );
}
