import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Game from "../Game";

import "./gamelist.css";

import unnamedImage from "../../assets/images/city.png";
import LovebugAppIcon from "../../assets/images/LovebugAppIcon.png";
import questionMark from "../../assets/images/QuestionMark.png";
import ImageWithTransition from "../../components/ImageBackground/ImageBackground";

const GameList = () => {
  const teaserMessage =
    "Wait until our title reveal event to get the full scoop of our latest project!";
  const [glitchText, setGlitchText] = useState(teaserMessage);

   function generateRandomText(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const games = [
    {
      id: 2,
      title: "Upcoming Game (TBA)",
      imageUrl: questionMark, // Replace with actual image URL
      description: glitchText,
    },
    {
      id: 1,
      title: "LoveBug Adventures",
      imageUrl: LovebugAppIcon, // Replace with actual image URL
      description:
        "Help the lovebugs grow their swarm by collecting pollen in this mobile game! Explore vibrant landscapes and overcome adorable obstacles.",
    },
    // Add more game objects here following the same structure
  ];


useEffect(() => {
  const teaserMessage =
    "Wait until our title reveal event to get the full scoop of our latest project!";

  const interval = setInterval(() => {
    // show glitch
    setGlitchText(generateRandomText(50));

    // after short delay, revert back to teaser
    setTimeout(() => {
      setGlitchText(teaserMessage);
    }, 350); // glitch duration
  }, 4000); // repeat every 4s

  return () => clearInterval(interval);
}, []);

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <ImageWithTransition image={unnamedImage} section={"games"} />
      <Container fluid className="w-100 z-1">
        <div xs={12} className="my-5">
          <h2 className="text-center z-3" style={{ color: "white" }}>
            {/* TODO: Remove glitch text */}
            {/* Ou<span className="glitch-text">r</span> Ga
            <span className="glitch-text">mes</span> */}
            Our Games
          </h2>{" "}
          <hr className="my-hr" />
        </div>
      <Container className="w-100 z-1 bg-transparent">
        <Row className="mx-0 justify-content-center">
          {games.map((game) => (
            <Col
              key={game.id}
              xs={12}
              md={6}
              lg={games?.length > 2 ? 3 : 4}
              className="mx-0 z-1"
            >
              <div className="game-item d-flex justify-content-center h-100">
                {/* New wrapper */}
                <Game game={game} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      </Container>
    </div>
  );
};

export default GameList;
