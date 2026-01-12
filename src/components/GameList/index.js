import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Game from "../Game";

import "./gamelist.css";

import gameSectionBG from "../../assets/images/GeoNovaBanner.png";
import LovebugAppIcon from "../../assets/images/LovebugAppIcon.png";
import FloridaManGameTitle from "../../assets/images/fmBeach2.png";
import ImageWithTransition from "../../components/ImageBackground/ImageBackground";

const GameList = () => {

  const games = [
    {
      id: 2,
      title: "Florida Man: The Game",
      imageUrl: FloridaManGameTitle, // Replace with actual image URL
      description: "A man from Florida finds himself in a conflict that most are too Normal to recognize. Finding secrets powers lost to humanity, he is the only one who stop the evil in the shadows.",
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

  return (
<div className="d-flex flex-column position-relative" style={{ minHeight: "100vh" }}>
      <ImageWithTransition image={gameSectionBG} section={"games"} />
      <Container fluid className="w-100 z-1">
        <div xs={12} className="my-5">
          <h2 className="text-center z-3" style={{ color: "white" }}>
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
