import React, { useEffect, useState, useRef } from "react";
import { Container, FloatingLabel, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./contact.css"; // include your inverted form + star CSS

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const starsRef = useRef(null);
  const location = useLocation();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  const formData = { name, email, message, selectedFile };

  // Log the form data
  console.log("Form Submitted:", formData);

  // Extra confirmation message
  console.info("✅ Submission successful! Your form was processed.");

  // Optional: browser popup alert
  alert("Form submission works! ✅");

  // Reset form state
  setName("");
  setEmail("");
  setMessage("");
  setSelectedFile(null);
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  // Star background effect
  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    container.innerHTML = "";

    // Static stars
    for (let i = 0; i < 300; i++) {
      const staticStar = document.createElement("div");
      staticStar.className = "star-static";
      staticStar.style.left = `${Math.random() * 100}vw`;
      staticStar.style.top = `${Math.random() * 100}vh`;
      staticStar.style.opacity = Math.random();
      container.appendChild(staticStar);
    }

    // Twinkling stars
    for (let i = 0; i < 200; i++) {
      const opaStar = document.createElement("div");
      opaStar.className = "star-static";
      opaStar.style.left = `${Math.random() * 100}vw`;
      opaStar.style.top = `${Math.random() * 100}vh`;
      opaStar.style.animationDuration = `5s`;
      opaStar.style.opacity = Math.random();
      container.appendChild(opaStar);
    }

    // Moving stars
    for (let i = 0; i < 10; i++) {
      const starMov = document.createElement("div");
      starMov.className = "star-movement";
      starMov.style.left = `${Math.random() * 100}vw`;
      starMov.style.top = `${Math.random() * 100}vh`;
      starMov.style.animationDuration = `6s`;
      starMov.style.opacity = Math.random();
      container.appendChild(starMov);
    }
  }, []);

  return (
    <div className="p-5 main-content wrapper">
      {/* Stars background */}
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>

      <Container className="p-5">
        <h1 className="header p-5">Contact Us</h1>
        <Container className="p-5 bg-dark text-light rounded-3">
          <hr className="border-light" />
          <Form onSubmit={handleSubmit}>
            <h5 className="text-center text-light">Send Message</h5>

            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingName" label="Name" className="text-light">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-dark text-light border-light"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Email address" className="text-light">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark text-light border-light"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingTextarea2" label="Message" className="text-light">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-dark text-light border-light"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-light">Attach a File (optional)</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                className="bg-dark text-light border-light"
              />
              {selectedFile && <p className="text-light">Selected file: {selectedFile.name}</p>}
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="light" type="submit">
                Send
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default ContactPage;
