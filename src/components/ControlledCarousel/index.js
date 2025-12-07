import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LovebugAppIcon from "../../assets/images/LovebugAppIcon.png";
import questionMark from "../../assets/images/QuestionMark.png";

import "./controlledCarousel.css";

const slides = [
  {
    header: "The Lovebug Game",
    subtext: "Help the lovebugs grow their swarm by collecting pollen in this mobile game! Explore vibrant landscapes and overcome adorable obstacles.",
    link: "/games/releases/LoveBugGame",
    image: LovebugAppIcon,
  },
  {
    header: "Upcoming Game (TBA)",
    subtext: "Title Reveal Event will be on our Discord on Dec. 21st @ 5:00 PM! Stay tuned for more details about our exciting new project.",
    link: "/page2",
    image: questionMark,
  },
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
        interval={null}
        indicators={true}
        controls={true}   // ensure arrows are rendered
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Image only */}
            <img
              className="carousel-image"
              src={slide.image}
              alt={slide.header}
            />

            {/* Caption BELOW image */}
            <div className="carousel-caption-below text-center">
              <Row>
                <Col>
                  <h2>{slide.header}</h2>
                  <p>{slide.subtext}</p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CustomCarousel;
