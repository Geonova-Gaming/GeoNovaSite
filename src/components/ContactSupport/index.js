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
          {/* TODO: Change from 12 back to 6  */}
          <Col
            xs={12}
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
                <button className="first-button">CONTACT US</button>
              </Link>
            </Row>
          </Col>
          {/* TODO: Uncomment this once the TRE is complete and Kickstart is live */}
          {/* <Col
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
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default ContactSupport;
