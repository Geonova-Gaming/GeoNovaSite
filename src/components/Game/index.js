import React from "react";
import { Card, Image, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./game.css";
const Game = ({ game }) => {
  
  return (
    // <OverlayTrigger
    //   placement="bottom"
    //   delay={{ show: 50, hide: 100 }}
    //   overlay={<Tooltip id={`tooltip-${game.id}`}>{game.description}</Tooltip>}
    // >
      <Card className="game-card custom-background smaller-card">
        <Image variant="top" src={game.imageUrl} alt={game.title} />
        <Card.Body>
          <Card.Title className="fw-bold">{game.title}</Card.Title>
          {/* <Card.Text>{game.id == 2 ? <span className="glitch-text d-block">{game.description}</span> : game.description}</Card.Text> */}
            <Card.Text>{game.description}</Card.Text>
        </Card.Body>
      </Card>
    // </OverlayTrigger>
  );
};

export default Game;
