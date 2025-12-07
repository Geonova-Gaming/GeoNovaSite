import React, { useEffect, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./notfound.css"; // reuse star styles

const NotFoundPage = () => {
  const starsRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  // Star background effect (same as ContactPage)
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
    <div className="p-5 main-content wrapper">
      {/* Stars background */}
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>

      <Container className="p-5 text-center text-light">
        <h1 className="header p-5">Error: 404</h1>
        <h3 className="mb-4">What'd you do?</h3>
<p>
  Much like <strong>[</strong> insert joke here <strong>]</strong>, the address you entered doesn’t exist. 
  Try going back to the homepage.
</p>
        <Button variant="light" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFoundPage;
