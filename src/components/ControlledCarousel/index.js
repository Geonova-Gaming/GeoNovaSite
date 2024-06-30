import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import "./controlledCarousel.css";

const slides = [
  {
    header: "The Lovebug Game",
    subtext: "This is the subtext for the first slide.",
    link: "/games/releases/LoveBugGame", // Link for the button
    buttonText: "Learn More",
  },
  {
    header: "Slide 2 Header",
    subtext: "This is the subtext for the second slide.",
    link: "/page2", // Link for the button
    buttonText: "Explore Now",
  },
  // Add more slides as needed
];

function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, event) => {
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
              className="d-block w-100"
              src="https://via.placeholder.com/800x400" // Replace with your image
              alt={slide.header}
            />
            <Carousel.Caption className="d-flex align-items-center justify-content-center">
              <Row>
                <Col>
                  <h2>{slide.header}</h2>
                  <p>{slide.subtext}</p>
                  <Button variant="primary" href={slide.link}>
                    {slide.buttonText}
                  </Button>
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
