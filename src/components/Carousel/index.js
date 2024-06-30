import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

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

function GameCarousel() {
  return (
    <Container>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src="https://img1.wsimg.com/isteam/ip/b4d39968-ce34-4e68-ac72-ba40d4530675/Lovebug%20Blog%20Post-0004.png/:/cr=t:0.16%25,l:0%25,w:100%25,h:99.68%25/rs=w:814,h:407,cg:true" // Replace with your image
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

export default GameCarousel;
