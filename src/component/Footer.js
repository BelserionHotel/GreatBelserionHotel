import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Row style={{ marginLeft: "70px", marginRight: "70px" }}>
        <Col lg={3} style={{ backgroundColor: "yellow" }}>
          <span>Main Contact</span>
          <p>
            Asburd 14 ( Miami )<br /> info@resort.com
            <br /> +23 3453776547
            <br /> Reception 24 H
          </p>
        </Col>
        <Col lg={3} style={{ backgroundColor: "blue" }}>
          <span>Site Links</span>
          <span>Home</span>
          <br />
          <span>About</span>
          <br />
          <span>Rooms</span>
          <br />
          <span>Services</span>
          <br />
          <span>Gallery</span>
        </Col>
        <Col lg={6} style={{ backgroundColor: "red" }}>
          <span> Newsletter</span>
          <Form>
            <input type="email" style={{ height: "48px" }} />
            <Button style={{ height: "50px" }}>asds</Button>
          </Form>
          <Row>
            <Col>Social</Col>
            <Col>Social</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
