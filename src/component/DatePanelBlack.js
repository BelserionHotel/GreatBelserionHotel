import React, { Fragment } from "react";

import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";

export default function DatePanelBlack() {
  return (
    <Fragment>
      <Container>
        <Row className="cont">
          <Col xs="12" lg="3">
            <div className="cinhome">
              Check-In
              <br />
              <input type="date" className="date1"></input>
            </div>
          </Col>
          <Col xs="12" lg="3">
            <div className="couthome">
              Check-Out
              <br />
              <input type="date" className="date1"></input>
            </div>
          </Col>
          <Col xs="12" lg="3">
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
    </Fragment>
  );
}
