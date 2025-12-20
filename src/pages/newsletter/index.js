import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NewsletterSection from "../../components/NewsletterSection";
import "./newsletter.css";

const NewsletterPage = () => {
  const starsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    container.innerHTML = "";

    // Static stars
    for (let i = 0; i < 300; i++) {
      const staticStar = document.createElement("div");
      staticStar.className = "star-static";
      staticStar.style.left = `${Math.random() * 100}vw`;
      staticStar.style.top = `${Math.random() * 100}vh`;
      staticStar.style.opacity = Math.random();
      container.appendChild(staticStar);
    }

    // Pulsing stars
    for (let i = 0; i < 200; i++) {
      const opaStar = document.createElement("div");
      opaStar.className = "star-static";
      opaStar.style.left = `${Math.random() * 100}vw`;
      opaStar.style.top = `${Math.random() * 100}vh`;
      opaStar.style.animationDuration = `5s`;
      opaStar.style.opacity = Math.random();
      container.appendChild(opaStar);
    }

    // Moving stars
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
    <div className="contact-wrapper">
      {/* Starfield */}
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>

      {/* Page Content */}
      <div className="contact-inner">
        <h1 className="header">Newsletter Sign-Up</h1>
        <hr />

        {/* Replace old form with NewsletterSection */}
        {/* <div className="contact-form-box bg-dark text-light rounded-3 p-4"> */}
          <NewsletterSection />
        {/* </div> */}
      </div>
    </div>
  );
};

export default NewsletterPage;
