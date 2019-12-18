import React from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import "../App.css";
import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
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

      <Container>
        <Row className="cont">
          <Col xs="12" lg="3">
            {/* <div className="makehome">Make Reservation</div> */}
            <div className="cinhome">
              Check-In
              <br />
              <input type="date" className="date1"></input>
            </div>
          </Col>
          <Col xs="12" lg="3">
            {/* <div className="makehome">Make Reservation</div> */}
            <div className="couthome">
              Check-Out
              <br />
              <input type="date" className="date1"></input>
            </div>
          </Col>
          <Col xs="12" lg="3">
            {/* <div className="makehome">Make Reservation</div> */}
            <div className="guesthome">
              Guest
              <br />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" className="date1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </div>
          </Col>
          <Col xs="12" lg="3">
            <div className="makehome">
              {" "}
              <br style={{ lineHeight: "40px" }} />
              Make A Reservation
            </div>
          </Col>
        </Row>
      </Container>

      <div className="text-center wrap" style={{ marginTop: "238px" }}>
        <Row>
          <Col xl={8} lg={12} xs={12}>
            <Row>
              <Col xs={12} lg={6} xl={6} className="image1">
                <img src={img1} alt="wkwkw" className="img12" id="item1" />
              </Col>

              <Col
                xs={12}
                lg={6}
                xl={6}
                id="item2"
                style={{
                  backgroundColor: "black",
                  color: " #e2c285",
                  width: "100%",
                  border: "1px solid #e2c285"
                }}
              >
                <p
                  style={{
                    marginTop: "50px",
                    fontFamily: "Playfair Display",
                    fontSize: "35px"
                  }}
                >
                  Great Services
                </p>
                <img src={jcover2} alt="wkwk" />
                <p style={{ marginTop: "30px" }}>
                  <span
                    style={{
                      color: "#blaca3",
                      position: "relative",
                      display: "inline-block",
                      width: "70%"
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni praesentium nobis ratione molestias eligendi repellat
                    qui eius cumque ipsam maxime voluptate pariatur ducimus,
                    iure iusto ipsa, dolores at quas quis?
                  </span>
                </p>
                <Button
                  style={{ marginTop: "30px", marginBottom: "50px" }}
                  variant="outline-light"
                >
                  learn more
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={12} xs={12} className="image1">
            <img src={img2} alt="wkwkw" className="img12 imm" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
