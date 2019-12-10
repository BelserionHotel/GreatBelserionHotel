import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../App.css";
import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";
export default function Home() {
  return (
    <div>
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
            Belserion Hotel
          </p>

          <h1
            className="text-center"
            style={{
              color: "white",
              fontSize: "50px"
            }}
          >
            Luxury Resort & Spa
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
    </div>
  );
}
