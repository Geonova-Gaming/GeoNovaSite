import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./games.css";

import ControlledCarousel from "../../components/ControlledCarousel";
import { t } from "i18next";

const GamesPage = () => {
  const location = useLocation();
  const starsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 300; i++) {
      const staticStar = document.createElement("div");
      staticStar.className = "star-static";
      staticStar.style.left = `${Math.random() * 100}vw`;
      staticStar.style.top = `${Math.random() * 100}vh`;
      staticStar.style.opacity = Math.random();
      container.appendChild(staticStar);
    }

    for (let i = 0; i < 200; i++) {
      const opaStar = document.createElement("div");
      opaStar.className = "star-static";
      opaStar.style.left = `${Math.random() * 100}vw`;
      opaStar.style.top = `${Math.random() * 100}vh`;
      opaStar.style.animationDuration = `5s`;
      opaStar.style.opacity = Math.random();
      container.appendChild(opaStar);
    }

    for (let i = 0; i < 10; i++) {
      const starMov = document.createElement("div");
      starMov.className = "star-movement";
      starMov.style.left = `${Math.random() * 100}vw`;
      starMov.style.top = `${Math.random() * 100}vh`;
      starMov.style.animationDuration = `6s`;
      starMov.style.opacity = Math.random();
      container.appendChild(starMov);
    }
  }, []);

  return (
    <div className="games-wrapper">
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>

      <div className="games-container">
        <div className="games-inner">
          <h1 className="header">{t("games.title")}</h1>
          <hr />
          <ControlledCarousel />
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
