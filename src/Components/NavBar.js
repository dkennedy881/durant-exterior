import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo.jpg";

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img alt="headerImage" src={logo} id="navbar-icon" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav id="nav-item-divider-div">
        <div id="nav-item-divider"></div>
      </Nav>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-collapse-div">
          <Link
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`nav-item ${
              location.pathname === "/services" ? "active" : ""
            }`}
            to="/services"
          >
            Services
          </Link>
          <Link
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
