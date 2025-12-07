import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import images for each slide
import LovebugAppIcon from "../../assets/images/LovebugAppIcon.png";
import questionMark from "../../assets/images/QuestionMark.png";

import "./controlledCarousel.css";

const slides = [
  {
    header: "The Lovebug Game",
    subtext: "This is the subtext for the first slide.",
    link: "/games/releases/LoveBugGame",
    buttonText: "Learn More",
    image: LovebugAppIcon, // unique image
  },
  {
    header: "Upcoming Game (TBA)",
    subtext: "This is the subtext for the second slide.",
    link: "/page2",
    buttonText: "Explore Now",
    image: questionMark, // unique image
  }
];

function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        className="no-transition"
        interval={null}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="carousel-image"
              src={slide.image}   // use slide-specific image
              alt={slide.header}
            />
            <Carousel.Caption className="d-flex align-items-center justify-content-center">
              <Row>
                <Col>
                  <h2>{slide.header}</h2>
                  <p>{slide.subtext}</p>
                  <Link to={slide.link}>
                    <Button variant="primary">{slide.buttonText}</Button>
                  </Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CustomCarousel;
