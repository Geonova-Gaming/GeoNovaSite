import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";

import "./aboutUs.css";
import Bard from "../../assets/images/bardsemblem.png";
import Coders from "../../assets/images/codingemblem_.png";
import Artists from "../../assets/images/artistemblem.png";
import Marketers from "../../assets/images/marketingemblem_.png";
// import Geonova from "../../assets/images/Genova.png";
import Geonova from "../../assets/images/writersemblem.png";

//TODO: Add translations to this, don't  hardcode the values
const aboutUsData = [
  {
    id: 1,
    image: Artists,
    heading: "Artists",
    subheading: "Aiming to create art that captures our vision",
    color: "#00eaff", // cyan glow
  },
  {
    id: 2,
    image: Coders,
    heading: "Coders",
    subheading: "Turning brilliant ideas into reality through code",
    color: "#39ff14", // neon green glow
  },
   {
    id: 3,
    image: Marketers,
    heading: "Marketers",
    subheading: "Establishing our presence and driving growth for our projects",
    color: "#ff4444", // red glow
  },
   {
    id: 4,
    image: Geonova,
    heading: "Writers",
    subheading:
      "A passionate groups of storytellers crafting immersive narratives",
    color: "#E67F23", // orange glow
  },
  {
    id: 5,
    image: Bard,
    heading: "Bards",
    subheading: "Composing memorable music for our new and exciting projects",
    color: "#E8C511", // gold glow
  }
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
            <Col key={item.id} className="about-col">
              <div
                className="about-item"
                style={{ "--glow-color": item.color }}
              >
                <Image
                  className="image-about-style"
                  src={item.image}
                  alt={item.heading}
                />
                <h3 className="my-h2">{item.heading}</h3>
                <p className="custom-text">{item.subheading}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
