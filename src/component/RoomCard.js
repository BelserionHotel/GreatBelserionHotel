import React, { Fragment } from "react";
// Photo by Olexandr Ignatov on Unsplash
import { Link, withRouter } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function RoomCard(props) {
    return (
        <Fragment>
            <Container>
                <Row className="room-card">
                    <Col lg={4} md={12} className="room-thumbnail">
                        <Image
                            src={require("../assets/hotel-room.jpg")}
                            alt="hotel-room"
                            fluid
                            rounded
                        />
                    </Col>
                    <Col lg={8} className="room-info-and-book">
                        <Row>
                            <Col lg={8} md={8} sm={12} className="room-info">
                                <p>hai</p>
                                <p>hai</p>
                                <ul>
                                    <li>capacity: {props.capacity}</li>
                                    <li>View: hai</li>
                                    <li>Size: haim2</li>
                                    <li>Bed Type: hai}</li>
                                    <li>Categories:hai</li>
                                    <li>Amenities: hai</li>
                                </ul>
                            </Col>

                            <Col
                                lg={4}
                                md={4}
                                sm={12}
                                className="room-price-and-book"
                            >
                                <p>Prices start at:</p>
                                <p>
                                    2,500,000 <span>IDR/night</span>
                                </p>
                                <button>
                                    <Link to={`/booking/${props.id}`}>
                                        BOOK
                                    </Link>
                                </button>

                                <button>VIEW DETAILS</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
export default withRouter(RoomCard);
