import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import jcover2 from "../assets/jcover2.png";
import { HeaderAll } from "../component";

import a from "../assets/a.jpg";
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
                                    ABOUT US
                                </p>
                                <h1
                                    style={{
                                        color: "#cb9734",
                                        fontSize: "50px",
                                        // width: "57%",
                                        marginTop: "30px"
                                    }}
                                >
                                    Belserion Hotel!
                                </h1>
                                <img
                                    src={jcover2}
                                    alt="wkwk"
                                    style={{ marginTop: "10px" }}
                                />
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
                                Located in the heart and soul of Jakarta’s
                                bustling Central Business District, Belserion ,
                                JAKARTA is a mere 45-minutes from Soekarno-Hatta
                                International Airport and 2km from Plaza
                                Indonesia. Exquisitely designed to satisfy even
                                the most discerning holiday or corporate
                                traveler, Belserion , JAKARTA is your premier
                                business lifestyle hotel. Inspired by
                                Belserion’s philosophy to provide memorable and
                                fulfilling hospitality experiences, Belserion ,
                                JAKARTA invites you to take your holiday
                                lifestyle to the next level. Enjoy a culinary
                                journey beyond compare at four signature
                                restaurants, or indulge in a heritage spa
                                treatment at our SPA. Host your next social or
                                corporate event in one of 24 modern and
                                multi-faceted meeting rooms or for larger
                                groups, our Grand Ballroom is appointed with an
                                enchanting outdoor garden.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={a}
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
                            Belserion believes that life is brighter when we
                            feel relaxed, youthful, dynamic and sociable.
                            Devoted to nurture a sense of well-being among the
                            frazzled guests, Belserion commits to take care of
                            their mind, body and soul from the inside, with
                            healthy lifestyle as the key drive. Emphasizing on
                            the guests’ well-being and staying fit, Belserion
                            provides the well-maintained quality, value and
                            service – It’s all part of Belserion’ wellness
                            initiative to support guests in pursuing a healthy
                            lifestyle, 365 days every year. Black & white
                            photography is Belserion’ signature artwork that
                            represents the greatest imaginable contrast to make
                            Belserion’ signature orange color stands out from
                            the crowd. The underlying approach behind Belserion
                            Hotels is a constant application of the brand motto
                            “The Brighter Side of Life”.
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
}
