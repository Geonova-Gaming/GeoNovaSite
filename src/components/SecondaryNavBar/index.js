import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./secondarynavbar.css";
import { Link } from "react-router-dom";
function MiscNavContent() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
      <Link to="/about" className="footer-nav-link">
        <Nav.Link href="/about">About</Nav.Link>
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/contact" className="footer-nav-link">
        <Nav.Link href="/contact">Contact</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/donate" className="footer-nav-link">
        <Nav.Link href="/donate">Donate</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Terms and Conditions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const MiscNav = () => {
  return (
    <div>
      <Navbar
        className="custom-container justify-content-center"
        sticky="bottom"
      >
        <MiscNavContent />
      </Navbar>
    </div>
  );
};

export default MiscNav;
