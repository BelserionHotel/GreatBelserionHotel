import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

function Navbarr() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        // style={{ backgroundColor: "black" }}
        variant="dark"
        className="navbar"
      >
        <Container
        // style={{ marginLeft: "50px", marginRight: "50px" }}
        >
          <Navbar.Brand className="navbrand">Belserion</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navres">
              <Nav.Link style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Link to="/" className="link">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Link to="/about" className="link">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Link to="/rooms" className="link">
                  Rooms
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Link to="/services" className="link">
                  Services
                </Link>
              </Nav.Link>

              <Nav.Link style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Link to="/gallery" className="link">
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </Nav.Link>
              <Button
                className="sbn"
                variant="outline-light"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <Link
                  to="/signin"
                  className="signinbuttonnavbar"
                  style={{ color: "white" }}
                >
                  Signin
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default withRouter(Navbarr);
