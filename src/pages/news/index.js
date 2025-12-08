import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Logo from "../../assets/images/Geonova2.jpg";

import "./news.css"; // include your star CSS here too
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import articles from "./articles.json"; // Import the JSON file

// ------------------ ArticleCard ------------------
function ArticleCard({ article }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <Card style={{ width: "18rem" }} className="cards-style-news m-2">
      <Card.Img variant="top" src={Logo} />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Text>{article.date}</Card.Text>
        <Card.Title>{article.title}</Card.Title>
        <Button
          as={Link}
          to={article.link}
          variant="secondary"
          className="custom-button-news border-1 rounded-0"
        >
          Continue Reading
        </Button>
      </Card.Body>
    </Card>
  );
}

// ------------------ ArticleList ------------------
function ArticleList({ articlesData }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {articlesData.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

// ------------------ ArticleNav ------------------
function ArticleNav({ setFilter }) {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link
          className="custom-button-news"
          onClick={() => setFilter("all")}
        >
          All Posts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          className="custom-button-news"
          onClick={() => setFilter("inProgress")}
        >
          Games In Progress
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          className="custom-button-news"
          onClick={() => setFilter("completed")}
        >
          Games
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

// ------------------ NewsPage ------------------
const NewsPage = () => {
  const [filter, setFilter] = useState("all");
  const [showEmpty, setShowEmpty] = useState(false);
  const starsRef = useRef(null);
  const location = useLocation();

  const filteredArticles =
    filter === "all"
      ? articles
      : filter === "inProgress"
      ? articles.filter(
          (article) => !article.isGameComplete && article.tag === "Game"
        )
      : filter === "completed"
      ? articles.filter(
          (article) => article.isGameComplete && article.tag === "Game"
        )
      : [];

  useEffect(() => {
    setShowEmpty(filteredArticles.length === 0);
  }, [filteredArticles]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  // Star background effect
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

    // Twinkling stars
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
    <div className="main-content  wrapper p-5">
      {/* Stars background */}
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>

      <Container fluid className="mt-5">
        <Container>
          <h1 className="header">News</h1>
          <hr />
        </Container>

        {showEmpty ? (
          <>
            <Container className="d-flex justify-content-center mt-5 p-2">
              <ArticleNav setFilter={setFilter} />
            </Container>
            <Container className="d-flex justify-content-center mt-5 p-2">
              <ArticleList articlesData={filteredArticles} />
            </Container>
          </>
        ) : (
          <Container
            className="d-flex justify-content-center align-items-center mt-5 p-5"
            style={{
              minHeight: "300px",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ color: "white", textAlign: "center" }}>
              Come back later for news about our upcoming games!
            </h3>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default NewsPage;
