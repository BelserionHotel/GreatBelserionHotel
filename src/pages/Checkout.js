import React, { useState, useEffect } from "react";
import { axios } from "../component/helpers";
import Swal from "sweetalert2";

import { Link, withRouter } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";
import CreditCardInput from "react-credit-card-input";
import co from "../assets/checkout.jpg";
import { HeaderAll } from "../component";

function Checkout(props) {
    const direct = props.history.location.pathname;
    const sdirect = direct.split("/");

    const params = sdirect[3];

    const [infoRoom, setInfoRoom] = useState({});
    const [infoUser, setInfoUser] = useState({});

    // const dateValuein = infoRoom.CheckInDate
    // const dtin = dateValuein.substr(8);
    // const dtout = dateValueout.substr(8);

    useEffect(() => {
        axios()
            .get(`/reservationRooms/u/${params}`)
            .then(response => {
                setInfoRoom(response.data.data[0]);
                setInfoUser(response.data.data[0].Customer_id);
            });
    }, []);

    const handleClick = () => {
        axios()
            .put(`reservationRooms/checkout/${params}`)
            .then(result => {
                if (result.status === 200) {
                    Swal.fire(
                        "Thank You",
                        "Your reservation is completed",
                        "success"
                    );
                    props.history.push("/");
                }
            });
    };

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
                                        {infoRoom.CheckInDate === undefined
                                            ? "1"
                                            : infoRoom.CheckInDate.substr(
                                                  8,
                                                  10
                                              ).substr(0, 2)}
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
                                        {infoRoom.CheckInDate === undefined
                                            ? "loading..."
                                            : infoRoom.CheckInDate.substr(
                                                  0,
                                                  10
                                              )}
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
                                        {infoRoom.CheckOutDate === undefined
                                            ? "1"
                                            : infoRoom.CheckOutDate.substr(
                                                  8,
                                                  10
                                              ).substr(0, 2)}
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
                                        {infoRoom.CheckOutDate === undefined
                                            ? "loading..."
                                            : infoRoom.CheckOutDate.substr(
                                                  0,
                                                  10
                                              )}
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
                                        {infoRoom.DurationNights}
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
                                        {infoRoom.RoomPrice === undefined
                                            ? 0
                                            : infoRoom.RoomPrice}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "lato",
                                            color: "#ffffff",
                                            marginLeft: "5px"
                                        }}
                                    >
                                        {" "}
                                        IDR / TOTAL
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row style={{ color: "#525252", fontFamily: "Lato" }}>
                            <Col
                                lg={12}
                                style={{
                                    marginTop: "30px",
                                    marginBottom: "20px"
                                }}
                            >
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
                                <span>Name : {infoUser.name}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "20px"
                                }}
                            >
                                <span>Surname : {infoUser.surname}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "20px"
                                }}
                            >
                                <span>Email : {infoUser.email}</span>
                            </Col>

                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "20px"
                                }}
                            >
                                <span>Phone : {infoUser.phone}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "20px"
                                }}
                            >
                                <span>Address : {infoUser.address}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "20px"
                                }}
                            >
                                <span>City : {infoUser.city}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "40px"
                                }}
                            >
                                <span>Country : {infoUser.country}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "40px"
                                }}
                            >
                                <span>ZIP : {infoUser.zip}</span>
                            </Col>
                            <Col
                                lg={4}
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "40px"
                                }}
                            >
                                <span>Arrival : {infoRoom.ArrivalTime}</span>
                            </Col>
                            <Col lg={12}>
                                <span>Request : {infoRoom.Request}</span>
                            </Col>

                            <Col
                                lg={12}
                                style={{
                                    marginTop: "50px",
                                    marginBottom: "20px"
                                }}
                            >
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
                                <span>
                                    <br />
                                    Simple and safe. Make payments with any type
                                    of credit card.
                                    <br />
                                </span>
                                <br />
                                <CreditCardInput />
                                <Button onClick={handleClick}>Book Now</Button>
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
