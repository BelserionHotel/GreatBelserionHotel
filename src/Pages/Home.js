import React, { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../App.css";
import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

import { Header, DatePanelBlack } from "../component";

export default function Home() {
  return (
    <Fragment>
      <Header
        jumbotronTitle="Belserion Hotel"
        jumbotronSubtitle="Luxury Resort &amp; Spa"
      >
        <DatePanelBlack />
      </Header>

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
    </Fragment>
  );
}
