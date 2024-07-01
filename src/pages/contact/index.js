import React, { useEffect, useState } from "react";
import { Container, FloatingLabel } from "react-bootstrap";
import {
  Form,
  Col,
  Row,
  Button,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      name,
      email,
      message,
      selectedFile, // Assuming you want to handle the file as well
    };

    // Here you can handle the form data (e.g., send it to your backend)
    console.log("Form Submitted:", formData);

    // Reset form state if needed
    setName("");
    setEmail("");
    setMessage("");
    setSelectedFile(null);
  };

  const location = useLocation();

  // Scroll to top on route change (except initial render)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <div className="p-5 main-content wrapper">
      <Container className="p-5">
        <h1 className="header p-5">Contact Us</h1>
        <Container className="p-5  bg-light rounded-3">
          <hr />
          <Form onSubmit={handleSubmit}>
            <h5 className="text-center">Send Message</h5>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingName" label="Name">
                <Form.Control
                  type="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Email address">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Attach a File (optional)</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
              {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
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
