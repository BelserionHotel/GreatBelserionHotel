import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

function Navbarr() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
      >
        <Container style={{ marginLeft: "50px", marginRight: "50px" }}>
          <Navbar.Brand>Beslerion</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/" style={{ marginRight: "10px", color: "white" }}>
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/about" style={{ color: "white" }}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/rooms" style={{ color: "white" }}>
                  Rooms
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/services" style={{ color: "white" }}>
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/news" style={{ color: "white" }}>
                  News
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/gallery" style={{ color: "white" }}>
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/contact" style={{ color: "white" }}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default withRouter(Navbarr);
