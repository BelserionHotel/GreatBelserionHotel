import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import jcover2 from "../assets/jcover2.png";
import { HeaderAll } from "../component";

import img2 from "../assets/img2.jpg";
export default function About() {
  return (
    <Fragment>
      <HeaderAll jumbotronTitle="About" />
      <div className="about1">
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
                  fontSize: "25px"
                }}
                className="textabout"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
                <br />
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque. laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
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
                fontSize: "25px"
              }}
              className="textabout"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
