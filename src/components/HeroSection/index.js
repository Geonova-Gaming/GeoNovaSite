import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap"; // Import correctly

import GamingButtonComponent from "../GamingButton/GamingButton";
import GamingButtonCircle from "../GamingButton/GamingButtonCircle";

import "./herosection.css";
import CountdownTimer from "../CountdownTimer";

const HeroSection = () => {
  const handleButtonClick = () => {
    // Handle redirect logic to "./games/releases/LoveBugGame"
  };

  const isEventLive = () => {
    const now = new Date();

    // Convert current time to EST
    const nowEST = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );

    // Build today's 5:00 PM EST
    const eventTimeEST = new Date(
      nowEST.getFullYear(), nowEST.getMonth(), nowEST.getDate(),17,0,0,0)

    return nowEST >= eventTimeEST;
  };

  const discordLink = isEventLive()
    ? "https://discord.gg/cBX8gEvASC?event=1447756001284591749"
    : "https://discord.gg/AtyjN6q9Ub";

  return (
    <header className="showcase">
      <div className="showcase-content">
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
              <a href={discordLink} target="_blank" rel="noopener noreferrer">
                {" "}
                <button className="treEvent-button">
                  {" "}
                  {isEventLive()
                    ? "JOIN THE LIVE EVENT"
                    : "JOIN OUR DISCORD"}{" "}
                </button>{" "}
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HeroSection;
