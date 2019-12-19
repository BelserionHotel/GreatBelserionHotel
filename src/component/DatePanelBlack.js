import React, { Fragment } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

export default function DatePanelBlack() {
    return (
        <Fragment>
            <Container>
                <Row className="cont">
                    <Col xs="12" lg="3" style={{ margin: "auto" }}>
                        <div className="makehome">
                            <br style={{ lineHeight: "40px" }} />
                            Book Now
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
