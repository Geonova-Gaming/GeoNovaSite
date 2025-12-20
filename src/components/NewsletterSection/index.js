import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import GeonovaLogo from "../../assets/images/purpleGNlogo.png";
import "./newsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://d406ee064676d505936c2cfe097772d3.m.pipedream.net",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) throw new Error("Network error");

      setSuccess(true);
      setEmail("");
      setIsValid(false);

      // Hide success message after a few seconds
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
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
              Stay in the loop with our latest projects! Members get access to
              exclusive content delivered straight to their inbox.
            </p>

            <Form onSubmit={handleSubmit} className="mt-4">
              <div className="d-flex flex-column flex-sm-row mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  className="me-sm-2 mb-2 mb-sm-0"
                />

                <Button
                  type="submit"
                  className="signup-btn"
                  disabled={!isValid || loading}
                >
                  {loading ? "Signing Up..." : "Sign Up Now"}
                </Button>
              </div>

              {/* Success message */}
              {success && (
                <div style={{ color: "#4caf50", marginBottom: "0.75rem" }}>
                  You’re in! Check your inbox for updates.
                </div>
              )}

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
