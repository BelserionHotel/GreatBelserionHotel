import React, { Fragment } from "react";
// Photo by Olexandr Ignatov on Unsplash
import { Link, withRouter } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function RoomCard(props) {
  console.log(props);
  return (
    <Fragment>
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
              <p>{props.roomData.name}</p>
              <p>{props.roomData.description}</p>
              <ul>
                <li>adult: {props.roomData.info.adults}</li>
                <li>View: {props.roomData.info.view}</li>
                <li>Size: {props.roomData.info.size} m2</li>
                <li>Bed Type: {props.roomData.info.bedType}</li>
                <li>Categories: {props.roomData.info.categories}</li>
                <li>Amenities: {props.roomData.info.amenities}</li>
              </ul>
            </Col>

            <Col lg={4} md={4} sm={12} className="room-price-and-book">
              <p>Prices start at:</p>
              <p>
                2,500,000 <span>IDR/night</span>
              </p>
              <button>
                <Link to="./booking">BOOK</Link>
              </button>
              <button>VIEW DETAILS</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}
export default withRouter(RoomCard);
