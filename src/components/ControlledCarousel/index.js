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
  <div className="carousel-wrapper">
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      interval={null}
      indicators={true}
      controls={true}
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="carousel-image" src={slide.image} alt={slide.header} />

          <div className="carousel-caption-below text-center">
            <h2>{slide.header}</h2>
            <p>{slide.subtext}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

}

export default CustomCarousel;
