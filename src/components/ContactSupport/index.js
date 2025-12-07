import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./contactsupport.css";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import Link component

const Divider = () => {
  return <div className="divider"></div>;
};

const ContactSupport = () => {
  return (
    <div className="contact-support">
      <Container>
        <Row style={{ height: "100%" }}>
          <Col
            xs={6}
            className="d-flex flex-column justify-content-between text-center"
          >
            <Row>
              <h2 className="gradient-color">
                Contact Us
              </h2>
            </Row>
            <Row>
              <p>Let's chat! Drop us a line or visit our social media pages.</p>
            </Row>
            <Row>
              <Link to="/contact">
                {/* <button className="custom-button">Contact Us</button> */}
                <button className="first-button">CONTACT US</button>
              </Link>
            </Row>
          </Col>
          <Col
            xs={6}
            className="d-flex flex-column justify-content-between text-center"
          >
            <Row>
              <h2 className="gradient-color">
                Show Your Support
              </h2>
            </Row>
            <Row>
              <p>
                Help us make more awesome games! Donate to our cause on
                Kickstarter.
              </p>
            </Row>
            <Row>
              <a
                href="https://www.kickstarter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="first-button">DONATE</button>
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSupport;
