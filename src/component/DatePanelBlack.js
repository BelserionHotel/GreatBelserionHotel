import React, { Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function DatePanelBlack() {
    return (
        <Fragment>
            <Container>
                <Row className="cont">
                    <Col xs="12" lg="3" style={{ margin: "auto" }}>
                        <div className="makehome">
                            <br style={{ lineHeight: "40px" }} />
                            <Link to="/rooms" className="link">Book Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
