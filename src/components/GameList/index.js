import React from "react";
import { Col, Row } from "react-bootstrap";
import Game from "../Game";

import "./gamelist.css";
const games = [
  {
    id: 1,
    title: "LoveBug Adventures",
    imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    description:
      "Help the lovebugs reunite in this charming puzzle platformer! Explore vibrant landscapes, solve tricky puzzles, and overcome adorable obstacles in your quest for love.",
  },
  {
    id: 2,
    title: "Space Colony X",
    imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    description:
      "Build a thriving colony on a distant planet in this exciting strategy game! Gather resources, manage your population, and defend your base from alien threats.",
  },
  {
    id: 3,
    title: "LoveBug Adventures",
    imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    description:
      "Help the lovebugs reunite in this charming puzzle platformer! Explore vibrant landscapes, solve tricky puzzles, and overcome adorable obstacles in your quest for love.",
  },
  {
    id: 4,
    title: "Space Colony X",
    imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    description:
      "Build a thriving colony on a distant planet in this exciting strategy game! Gather resources, manage your population, and defend your base from alien threats.",
  },
  // Add more game objects here following the same structure
];

const GameList = () => {
  return (
    <div className="game-list justify-content-center">
      <Row>
        {games.map((game) => (
          <Col key={game.id} xs={12} md={6} lg={4}>
            <div className="game-item d-flex justify-content-center">
              {" "}
              {/* New wrapper */}
              <Game game={game} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GameList;
