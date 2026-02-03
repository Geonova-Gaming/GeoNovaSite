import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

import LovebugAppIcon from "../../assets/images/LovebugAppIcon.png";
import FloridaManGameTitle from "../../assets/images/fmTitle2.png";

import "./controlledCarousel.css";

const slides = [
   {
    header: "Florida Man: The Game",
    subtext: "A man from Florida finds himself in a conflict that most are too normal to recognize. Finding secrets powers lost to humanity, he is the only one who can stop the evil in the shadows.",
    link: "/page2",
    image: FloridaManGameTitle,
  },
  {
    header: "The Lovebug Game",
    subtext: "Help the lovebugs grow their swarm by collecting pollen in this mobile game! Explore vibrant landscapes and overcome adorable obstacles.",
    link: "/games/releases/LoveBugGame",
    image: LovebugAppIcon,
  }
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
