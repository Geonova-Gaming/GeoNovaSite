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
        <Row>
          <Col xs={6} className="text-center">
            {/* Center text in left column */}
            <h2 className="my-h2 text-primary font-weight-bold">Contact Us</h2> {/* Blue, bold h2 */}
            <p>Let's chat! Drop us a line or visit our social media pages.</p>
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link> {/* Replace with actual link */}
          </Col>
          <Col xs={2}>
            <Divider />
          </Col>
          <Col xs={4} className="text-center">
            {/* Center text in right column */}
            <h2 className="my-h2 text-primary font-weight-bold">Show Your Support</h2> {/* Blue, bold h2 */}
            <p>
              Help us make more awesome games! Donate to our cause on Kickstarter.
            </p>
            <a href="https://www.kickstarter.com/" target="_blank" rel="noopener noreferrer">
              <Button>Donate</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSupport;
