import React, { Fragment } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Navbar from "./Navbar";

import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";

export default function Header(props) {
  return (
    <Fragment>
      <Jumbotron fluid className="jumbotron">
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
            {props.jumbotronUpperText}
          </p>

          <h1
            className="text-center"
            style={{
              color: "white",
              fontSize: "50px"
            }}
          >
            {props.jumbotronLowerText}
          </h1>
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
    </Fragment>
  );
}
