import React from "react";
import { Link, withRouter,  Redirect } from "react-router-dom";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../App.css";

import co from "../assets/checkout.jpg";
import { HeaderAll } from "../component";

function Booking() {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <React.Fragment>{token ?
    <div>
      <HeaderAll jumbotronTitle="Booking"></HeaderAll>
      <Container>
        <Row>
          <Col lg={4}>
            <img src={co} alt="wkwk" className="imgco" />
            <div
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "#585F77"
              }}
            >
              <Row className="text-center">
                <Col
                  lg={12}
                  style={{
                    fontFamily: "Lato",
                    fontWeight: "100",
                    marginTop: "30px",
                    fontSize: "12px",
                    color: "#ffffff",
                    textAlign: "center"
                  }}
                >
                  YOUR RESERVATION
                </Col>
                <Col lg={6} style={{ marginTop: "40px" }}>
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "100",
                      fontSize: "12px",
                      color: "#ffffff"
                    }}
                  >
                    CHECK-IN
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "50px",
                      fontFamily: "lato",
                      color: "#ffffff"
                    }}
                  >
                    13
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "100",
                      fontSize: "12px",
                      color: "#ffffff"
                    }}
                  >
                    Dec, 2019 Friday
                  </span>
                  <br />
                </Col>
                <Col lg={6} style={{ marginTop: "40px" }}>
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "100",
                      fontSize: "12px",
                      color: "#ffffff"
                    }}
                  >
                    CHECK-OUT
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "50px",
                      fontFamily: "lato",
                      color: "#ffffff"
                    }}
                  >
                    14
                  </span>
                  <br />{" "}
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "100",
                      fontSize: "12px",
                      color: "#ffffff"
                    }}
                  >
                    Dec, 2019 Saturday
                  </span>
                </Col>
                <Col lg={6} style={{ marginTop: "40px" }}>
                  <span
                    style={{
                      fontSize: "30px",
                      fontFamily: "lato",
                      color: "#ffffff"
                    }}
                  >
                    1
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "100",
                      fontSize: "12px",
                      color: "#ffffff"
                    }}
                  >
                    GUESTS
                  </span>
                </Col>
                <Col lg={6} style={{ marginTop: "40px" }}>
                  <span
                    style={{
                      fontSize: "30px",
                      fontFamily: "lato",
                      color: "#ffffff"
                    }}
                  >
                    1
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "100",
                      fontSize: "12px",
                      color: "#ffffff"
                    }}
                  >
                    NIGHT
                  </span>
                </Col>
                <Col lg={12} style={{ marginTop: "60px" }}>
                  <span
                    style={{
                      fontSize: "50px",
                      fontFamily: "lato",
                      color: "#ffffff"
                    }}
                  >
                    30
                  </span>
                  <span style={{ fontFamily: "lato", color: "#ffffff" }}>
                    {" "}
                    $ / TOTAL
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={12} style={{ marginTop: "30px" }}>
                <span
                  style={{
                    color: "#525252",
                    fontSize: "30px"
                  }}
                >
                  Add Your Informations :
                </span>
                <br />
                <br />
              </Col>
              <Col lg={6}>
                <Form style={{ color: "#7e7e7e", fontSize: "14px" }}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Address *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Country *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col lg={6}>
                <Form
                  style={{
                    color: "#7e7e7e",
                    fontSize: "14px"
                  }}
                >
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                </Form>
              </Col>
              <Col lg={12}>
                <Form
                  style={{
                    color: "#7e7e7e",
                    fontSize: "14px"
                  }}
                >
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Request </Form.Label>
                    <Form.Control as="textarea" rows="6" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Arrival</Form.Label>
                    <Form.Control as="select">
                      <option>i dont know</option>
                      <option>12:00 - 1:00 am</option>
                      <option>1:00 - 2:00 am</option>
                      <option>2:00 - 3:00 am</option>
                      <option>3:00 - 4:00 am</option>
                      <option>4:00 - 5:00 am</option>
                      <option>5:00 - 6:00 am</option>
                      <option>6:00 - 7:00 am</option>
                      <option>7:00 - 8:00 am</option>
                      <option>8:00 - 9:00 am</option>
                      <option>9:00 - 10:00 am</option>
                      <option>10:00 - 11:00 am</option>
                      <option>11:00 - 12:00 am</option>
                      <option>12:00 - 13:00 pm</option>
                      <option>13:00 - 14:00 pm</option>
                      <option>14:00 - 15:00 pm</option>
                      <option>15:00 - 16:00 pm</option>
                      <option>16:00 - 17:00 pm</option>
                      <option>17:00 - 18:00 pm</option>
                      <option>18:00 - 19:00 pm</option>
                      <option>19:00 - 20:00 pm</option>
                      <option>20:00 - 21:00 pm</option>
                      <option>21:00 - 22:00 pm</option>
                      <option>22:00 - 23:00 pm</option>
                      <option>23:00 - 00:00 pm</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Check
                    type="checkbox"
                    label="Terms and conditions *"
                    required
                    style={{ marginBottom: "50px" }}
                  />
                  <Link to="/checkout">
                    <Button variant="primary">Primary</Button>
                  </Link>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>: <Redirect to="/signin" />}
    </React.Fragment>
  );
}
export default withRouter(Booking);
