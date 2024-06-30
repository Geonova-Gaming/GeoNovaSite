import React from "react";
import { Button } from "react-bootstrap"; // Import correctly

import "./herosection.css";

const HeroSection = () => {
  const handleButtonClick = () => {
    // Handle redirect logic to "./games/releases/LoveBugGame"
  };

  return (
    <header className="showcase">
      {/* Background image goes here (use CSS) */}
      <div className="showcase-top"></div>
      <div className="showcase-content">
        <p>Short description of your service/product.</p>
        <Button
          variant="primary"
          size="lg"
          className="btn-xl"
          onClick={handleButtonClick}
        >
          READ ABOUT OUR LATEST GAME
          <i className="fas fa-chevron-right btn-icon"></i>
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;
