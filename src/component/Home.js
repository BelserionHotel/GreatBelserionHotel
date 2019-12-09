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
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            src={jcover1}
            alt="cover jumbotron 1"
          />
          <h1
            className="text-center"
            style={{ color: "white", fontSize: "100px" }}
          >
            Belserion Hotel
          </h1>
          <h1
            className="text-center"
            style={{ color: "white", fontSize: "50px" }}
          >
            Luxury Resort & Spa
          </h1>
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
