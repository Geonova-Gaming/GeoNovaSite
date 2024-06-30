import React from "react";
import { Col, Row, Image } from "react-bootstrap";

import "./aboutUs.css";
//TODO: Add translations to this, don't  hardcode the values
const aboutUsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    heading: "Who We Are",
    subheading: "A passionate group of developers and artists.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    heading: "Artists",
    subheading: "To create fun and engaging games for everyone.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    heading: "Coders",
    subheading: "We love connecting with our players!",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    heading: "Bard",
    subheading: "We're always working on new and exciting projects.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us d-flex justify-content-center">
      <Row>
        {aboutUsData.map((item) => (
          <Col key={item.id} xs={3}>
            <Image roundedCircle src={item.image} alt={item.heading} />
            <h3 className="my-h2 text-center">{item.heading}</h3>
            <p className="custom-text text-center">{item.subheading}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutUs;
