import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";

import NavigationBar from "./NavigationBar";

export default function HeaderHome(props) {
  return (
    <Fragment>
      <NavigationBar />

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
          <h1
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
            {props.jumbotronTitle}
          </h1>

          <p
            className="text-center"
            style={{
              color: "white",
              fontSize: "50px",
              fontFamily: "Playfair Display serif"
            }}
          >
            {props.jumbotronSubtitle}
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
      {props.children}
    </Fragment>
  );
}
