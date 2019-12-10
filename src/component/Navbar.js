import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

function Navbarr() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Container
        // style={{ marginLeft: "50px", marginRight: "50px" }}
        >
          <Navbar.Brand style={{ fontSize: "32px" }}>Beslerion</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/" className="link">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/about" className="link">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/rooms" className="link">
                  Rooms
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/services" className="link">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/news" className="link">
                  News
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/gallery" className="link">
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link style={{ marginLeft: "15px" }}>
                <Link to="/contact" className="link">
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
