import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

function NavigationBar() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  const loginLinks = (
    <Button
      className="sbn"
      variant="outline-light"
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Link to="/" className="signinbuttonnavbar" style={{ color: "white" }}>
        Sign in
      </Link>
    </Button>
  );

  const logoutLinks = (
    <Button
      className="sbn"
      variant="outline-light"
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Link
        to="/signin"
        className="signinbuttonnavbar"
        style={{ color: "white" }}
        onClick={logout}
      >
        Logout
      </Link>
    </Button>
  );
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Container>
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
              {localStorage.getItem("token") !== null
                ? logoutLinks
                : loginLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default withRouter(NavigationBar);
