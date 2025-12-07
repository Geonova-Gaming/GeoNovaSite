import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import GeonovaLogo from "../../assets/images/Geonova2.jpg"; // Import the JSON file
import "./newsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`Thanks for signing up, ${email}!`);
      setEmail("");
      setIsValid(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#000", padding: "3rem 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left side text */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3 gradient-color">
              Join Our Newsletter
            </h1>
            <p className="lead" style={{ color: "#ccc" }}>
              Stay in the loop with our latest projects! Members get access to exclusive conten
              delivered straight to their inbox.
            </p>

            <Form onSubmit={handleSubmit} className="mt-4">
              <div className="d-flex mb-4">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  className="me-2"
                />
                <Button
                  type="submit"
                  className="signup-btn"
                  disabled={!isValid}
                >
                  Sign Up Now
                </Button>
              </div>

              {/* Consent text */}
              <small style={{ color: "#ccc" }}>
                By joining our mailing list you are providing consent for us to
                contact you with email marketing offers and updates, and are also
                agreeing to our{" "}
                <a href="/privacy" style={{ color: "#fff", fontWeight: "bold" }}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" style={{ color: "#fff", fontWeight: "bold" }}>
                  Terms of Service
                </a>.
              </small>
            </Form>
          </Col>

          {/* Right side image */}
          <Col lg={6} className="text-center">
            <img
              src={GeonovaLogo}
              alt="Newsletter illustration"
              className="img-fluid rounded shadow"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsletterSection;
