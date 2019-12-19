import { Container, Row, Col, Form } from "react-bootstrap";
import { axios } from "../component/helpers";
import "../App.css";
// import jcover1 from "../assets/jcover1.png";
import jcover2 from "../assets/jcover2.png";
import { HeaderAll } from "../component";

import RoomCard from "../component/RoomCard";
import React, { Component, Fragment } from "react";

export default class Rooms extends Component {
    state = {
        data: [],
        roomTypes: []
    };

    componentDidMount() {
        axios()
            .get(`/rooms/availables`)
            .then(result => {
                this.setState({
                    data: result.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Fragment>
                <HeaderAll jumbotronTitle="Rooms" />
                <div className="about1">
                    <br />
                    <br />
                    <br />
                    <Container style={{ backgroundColor: "white" }}>
                        <Row
                            style={{
                                height: "120px",
                                boxShadow: "0 13px 43px 0 rgba(37, 46, 89, 0.1)"
                            }}
                        >
                            <Col
                                lg={3}
                                xs={12}
                                md={6}
                                style={{
                                    backgroundColor: "white",
                                    marginTop: "20px",
                                    color: "black"
                                }}
                            >
                                CHECK-IN
                                <br />
                                <input
                                    type="date"
                                    className="date"
                                    style={{ backgroundColor: "white" }}
                                ></input>
                            </Col>
                            <Col
                                lg={3}
                                xs={12}
                                md={6}
                                style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    marginTop: "20px"
                                }}
                            >
                                CHECK-OUT
                                <br />
                                <input
                                    type="date"
                                    className="date"
                                    style={{ backgroundColor: "white" }}
                                ></input>
                            </Col>
                            <Col
                                lg={3}
                                xs={12}
                                md={6}
                                style={{
                                    marginTop: "0",
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                            >
                                <br />
                                GUEST
                                <br />
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control
                                        as="select"
                                        className="date"
                                        style={{ backgroundColor: "white" }}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col
                                lg={3}
                                xs={12}
                                md={6}
                                style={{ backgroundColor: "#C99635" }}
                                className="booknow"
                            >
                                <p
                                    className="booknow1"
                                    style={{
                                        // backgroundColor: "#C99635",
                                        textTransform: "uppercase",
                                        textAlign: "center",
                                        marginTop: "45px",
                                        color: "#ffffff",
                                        fontFamily: "Monserrat",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}
                                >
                                    book now
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container
                        style={{ marginTop: "150px" }}
                        className="listrom"
                    >
                        <Row>
                            <Col className="text-center">
                                <p
                                    style={{
                                        fontSize: "19px",
                                        fontFamily: "monserrat",
                                        color: "grey",
                                        lineHeight: "1px"
                                    }}
                                >
                                    CHOOSE FOR YOURSELF
                                </p>
                                <p
                                    style={{
                                        fontSize: "50px",
                                        color: "#cb9734",
                                        fontFamily: "playfair display",
                                        marginBottom: "30px"
                                    }}
                                >
                                    Our Room
                                </p>
                                <img src={jcover2} alt="image-cover"></img>
                            </Col>
                        </Row>
                    </Container>
                    {this.state.data.map(data => {
                        const room_id = data._id;
                        const type = data.RoomType_id.Name;
                        const caps = data.RoomType_id.Capacity;
                        const price = data.RoomType_id.RoomPrice;
                        const desc = data.RoomType_id.Description;
                        const image = data.RoomType_id.RoomImage;

                        return (
                            <RoomCard
                                id={room_id}
                                type={type}
                                capacity={caps}
                                price={price}
                                desc={desc}
                                image={image}
                            />
                        );
                    })}
                </div>
            </Fragment>
        );
    }
}
