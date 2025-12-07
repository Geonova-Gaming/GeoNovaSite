import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap"; // Import correctly

import GamingButtonComponent from "../GamingButton/GamingButton"
import GamingButtonCircle from "../GamingButton/GamingButtonCircle"

import "./herosection.css";
import CountdownTimer from "../CountdownTimer";

const HeroSection = () => {
  const handleButtonClick = () => {
    // Handle redirect logic to "./games/releases/LoveBugGame"
  };

  return (
    <header className="showcase">
      <div className="showcase-content">
        {/* <GamingButtonComponent>READ ABOUT OUR LATEST GAME</GamingButtonComponent> */}
        {/* <GamingButtonCircle>READ A<span className="glitch-text">B</span>OUT OUR LATEST <span className="glitch-text">GAME</span></GamingButtonCircle> */}
      <Container>
         <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <CountdownTimer
                targetDate="2025-12-21T00:00:00"
                title="Days Until Title Reveal Event:"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <a
                href="https://discord.gg/AtyjN6q9Ub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="treEvent-button">JOIN OUR DISCORD</button>
              </a>
            </Col>
          </Row>
			</Container>
      </div>
    </header>
  );
};

export default HeroSection;
