import React from "react";
import { Button } from "react-bootstrap"; // Import correctly

import GamingButtonComponent from "../GamingButton/GamingButton"
import GamingButtonCircle from "../GamingButton/GamingButtonCircle"

import "./herosection.css";

const HeroSection = () => {
  const handleButtonClick = () => {
    // Handle redirect logic to "./games/releases/LoveBugGame"
  };

  return (
    <header className="showcase">
      {/* Background image goes here (use CSS) */}
      <div className="showcase-content">
        {/* <p>Short description of your service/product.</p> */}
        {/* <GamingButtonComponent>READ ABOUT OUR LATEST GAME</GamingButtonComponent> */}
        <GamingButtonCircle>READ A<span className="glitch-text">B</span>OUT OUR LATEST <span className="glitch-text">GAME</span></GamingButtonCircle>
      </div>
    </header>
  );
};

export default HeroSection;
