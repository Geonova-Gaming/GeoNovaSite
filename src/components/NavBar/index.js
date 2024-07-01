import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar fixed="top" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="https://cdn.discordapp.com/attachments/778680833153564693/1252456138486579303/rsh175m.png?ex=6681716c&is=66801fec&hm=909214a321f58f12213d8ed2d6800bff3b1fa7aa1665edd0199f0455d53d621b&"
          width="200"
          height="100"
          className="d-inline-block "
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey={location.pathname} className="ms-auto" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/games">
              Games
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
