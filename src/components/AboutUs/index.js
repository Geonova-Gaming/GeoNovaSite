import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";

import "./aboutUs.css";
import Bard from "../../assets/images/musik.png";
import Coders from "../../assets/images/keyboard.png";
import Artists from "../../assets/images/Artistas.png";
// import Geonova from "../../assets/images/Genova.png";
import Geonova from "../../assets/images/Geonova.png";

//TODO: Add translations to this, don't  hardcode the values
const aboutUsData = [
  {
    id: 1,
    image: Geonova, // Replace with actual image URL
    heading: "Who We Are",
    subheading: "A passionate group of developers and artists.",
  },
  {
    id: 2,
    image: Artists, // Replace with actual image URL
    heading: "Artists",
    subheading: "To create fun and engaging games for everyone.",
  },
  {
    id: 3,
    image: Coders, // Replace with actual image URL
    heading: "Coders",
    subheading: "We love connecting with our players!",
  },
  {
    id: 4,
    image: Bard, // Replace with actual image URL
    heading: "Bard",
    subheading: "We're always working on new and exciting projects.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us d-flex justify-content-center h-100">
      <Container fluid className="w-100 z-1">
        <div xs={12} className="my-5">
          <h2 className="my-h2 text-center my-2 py-2">About Us</h2>
          <hr className="my-hr" />
        </div>
        <Row className="mx-0">
          {aboutUsData.map((item) => (
            <Col key={item.id} xs={3} className="mx-0">
              <Image
                className="image-about-style"
                src={item.image}
                alt={item.heading}
              />
              <h3 className="my-h2 text-center">{item.heading}</h3>
              <p className="custom-text text-center">{item.subheading}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
