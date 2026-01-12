import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";

import HeroSection from "../../components/HeroSection";
import GameList from "../../components/GameList";
import AboutUs from "../../components/AboutUs";
import ContactSupport from "../../components/ContactSupport";
import ArticleFilterList from "../../components/ArticleFilterList";

import "./home.css";
import { useLocation } from "react-router-dom";
import NewsletterSection from "../../components/NewsletterSection";

const MainPage = () => {
  const location = useLocation();
  const starsRef = useRef(null); // para referenciar el contenedor de estrellas

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;

    for (let i = 0; i < 300; i++) {
      const staticStar = document.createElement("div");
      staticStar.className = "star-static";
      staticStar.style.left = `${Math.random() * 100}vw`;
      staticStar.style.top = `${Math.random() * 100}vh`;
      staticStar.style.animationDuration = `0s`;
      staticStar.style.opacity = Math.random(1);
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
    <>
      <div className="main-content">
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>
        <HeroSection />
        <div className="d-flex justify-content-center flex-column">
          <GameList />
          <ArticleFilterList />
          <AboutUs />
          <NewsletterSection />
          <ContactSupport />
        </div>
      </div>
    </>
  );
};

export default MainPage;
