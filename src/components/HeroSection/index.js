import React from "react";
import { Button } from "react-bootstrap"; // Import correctly

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
      <CountdownTimer targetDate="2025-12-21T00:00:00"  title="Days Until Title Reveal Event: " />
      </div>
    </header>
  );
};

export default HeroSection;
