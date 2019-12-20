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
        const newState = [];
        for (const roomType of this.state.data) {
            const {
                RoomType_id: { Name }
            } = roomType;
            newState.push({
                name: Name,
                data: [roomType]
            });
        }

        let result = [];

        newState.forEach(item => {
            var exist = result.filter((v, i) => {
                return v.name === item.name;
            });
            if (exist.length) {
                var existIndex = result.indexOf(exist[0]);
                result[existIndex].data = result[existIndex].data.concat(
                    item.data
                );
            } else {
                result.push(item);
            }
        });
        return (
            <Fragment>
                <HeaderAll jumbotronTitle="Rooms" />
                <div className="about1">
                    <br />

                    <Container
                        style={{ marginTop: "50px" }}
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
                    {result.map(data => {
                        const room_id = data.data[0]._id;
                        const type = data.data[0].RoomType_id.Name;
                        const caps = data.data[0].RoomType_id.Capacity;
                        const price = data.data[0].RoomType_id.RoomPrice;
                        const desc = data.data[0].RoomType_id.Description;
                        const image = data.data[0].RoomType_id.RoomImage;
                        const facilities = data.data[0].RoomType_id.Facilities;
                        return (
                            <RoomCard
                                id={room_id}
                                type={type}
                                capacity={caps}
                                price={price}
                                desc={desc}
                                image={image}
                                facilities={facilities}
                                countAva = {data.data.length}
                            />
                        );
                    })}
                </div>
            </Fragment>
        );
    }
}
