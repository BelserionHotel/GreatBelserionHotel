import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import "../App.css";
import CreditCardInput from "react-credit-card-input";
import co from "../assets/checkout.jpg";
import { HeaderAll } from "../component";

function Checkout(props) {
  console.log(props);
  
  return (
    <div>
      <HeaderAll jumbotronTitle="Check Out"></HeaderAll>
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
            <Row style={{ color: "#525252", fontFamily: "Lato" }}>
              <Col lg={12} style={{ marginTop: "30px", marginBottom: "20px" }}>
                <span
                  style={{
                    color: "#525252",
                    fontSize: "30px"
                  }}
                >
                  Your Informations :
                </span>
                <br />
                <br />
              </Col>

              <Col
                lg={4}
                style={{
                  fontSize: "14px",
                  marginBottom: "20px"
                }}
              >
                <span>Name :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "20px" }}>
                <span>Surname :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "20px" }}>
                <span>Email :</span>
              </Col>

              <Col lg={4} style={{ fontSize: "14px", marginBottom: "20px" }}>
                <span>Phone :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "20px" }}>
                <span>Address :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "20px" }}>
                <span>City :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "40px" }}>
                <span>Country :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "40px" }}>
                <span>ZIP :</span>
              </Col>
              <Col lg={4} style={{ fontSize: "14px", marginBottom: "40px" }}>
                <span>Arrival :</span>
              </Col>
              <Col lg={12}>
                <span>Request :</span>
              </Col>

              <Col lg={12} style={{ marginTop: "50px", marginBottom: "20px" }}>
                <hr />
                <span
                  style={{
                    color: "#525252",
                    fontSize: "30px"
                  }}
                >
                  Payment Options :
                </span>
              </Col>
              <Col lg={12}>
                <Tabs defaultActiveKey="bank">
                  <Tab eventKey="bank" title="BANK TRANSFER">
                    <span>
                      <br />
                      Your reservation will be confirmed when we receive the
                      bank transfer, below our data :
                      <br />
                    </span>
                    <Row style={{ marginTop: "35px" }}>
                      <Col lg={6}>
                        Bank Name :
                        <span
                          style={{
                            color: "#7e7e7e",
                            fontSize: "13px",
                            display: "flex",
                            justifyContent: "right",
                            marginTop: "-20px"
                          }}
                        >
                          KEB Hana BANK
                        </span>
                        <hr />
                      </Col>
                      <Col lg={6}>
                        Holder Name :
                        <span
                          style={{
                            color: "#7e7e7e",
                            fontSize: "13px",
                            display: "flex",
                            justifyContent: "right",
                            marginTop: "-20px"
                          }}
                        >
                          Rizkian Akbar
                        </span>
                        <hr />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        Account Number :{" "}
                        <span
                          style={{
                            color: "#7e7e7e",
                            fontSize: "13px",
                            display: "flex",
                            justifyContent: "right",
                            marginTop: "-20px"
                          }}
                        >
                          65432415
                        </span>
                        <hr />
                      </Col>
                      <Col lg={6}>
                        Bank City :{" "}
                        <span
                          style={{
                            color: "#7e7e7e",
                            fontSize: "13px",
                            display: "flex",
                            justifyContent: "right",
                            marginTop: "-20px"
                          }}
                        >
                          Jakarta
                        </span>
                        <hr />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="creditcard" title="CREDIT CARD">
                    <span>
                      <br />
                      Simple and safe. Make payments with any type of credit
                      card.
                      <br />
                    </span>
                    <br />
                    <CreditCardInput />
                  </Tab>
                </Tabs>
                <Link to="/orderdetail">
                  <Button> Book Now</Button>
                </Link>
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
    </div>
  );
}
export default withRouter(Checkout);
