import React, { useEffect, useState, useRef, useMemo } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/gnLogo.png";
import "./news.css";
import articles from "./articles.json";

function ArticleCard({ article }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <Card className="cards-style-news">
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

function ArticleList({ articlesData }) {
  return (
    <div className="articles-grid">
      {articlesData.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

function ArticleNav({ setFilter }) {
  return (
    <Nav className="news-nav" as="ul">
      <Nav.Item as="li">
        <Nav.Link className="custom-button-news" onClick={() => setFilter("all")}>
          All Posts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="custom-button-news" onClick={() => setFilter("inProgress")}>
          Games In Progress
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="custom-button-news" onClick={() => setFilter("completed")}>
          Games
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const NewsPage = () => {
  const [filter, setFilter] = useState("all");
  const [showEmpty, setShowEmpty] = useState(false);
  const starsRef = useRef(null);
  const location = useLocation();

  const filteredArticles = useMemo(() => {
    if (filter === "all") return articles;
    if (filter === "inProgress")
      return articles.filter(a => !a.isGameComplete && a.tag === "Game");
    if (filter === "completed")
      return articles.filter(a => a.isGameComplete && a.tag === "Game");
    return [];
  }, [filter]);

  useEffect(() => {
    setShowEmpty(filteredArticles.length === 0);
  }, [filteredArticles]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < 300; i++) {
      const s = document.createElement("div");
      s.className = "star-static";
      s.style.left = `${Math.random() * 100}vw`;
      s.style.top = `${Math.random() * 100}vh`;
      s.style.opacity = Math.random();
      container.appendChild(s);
    }

    for (let i = 0; i < 200; i++) {
      const s = document.createElement("div");
      s.className = "star-static";
      s.style.left = `${Math.random() * 100}vw`;
      s.style.top = `${Math.random() * 100}vh`;
      s.style.animationDuration = `5s`;
      s.style.opacity = Math.random();
      container.appendChild(s);
    }

    for (let i = 0; i < 10; i++) {
      const s = document.createElement("div");
      s.className = "star-movement";
      s.style.left = `${Math.random() * 100}vw`;
      s.style.top = `${Math.random() * 100}vh`;
      s.style.animationDuration = `6s`;
      s.style.opacity = Math.random();
      container.appendChild(s);
    }
  }, []);

  return (
    <div className="news-wrapper">
      <div className="main-stars">
        <div className="stars-container" ref={starsRef}></div>
      </div>

      <div className="news-inner">
        <h1 className="header">News</h1>
        <hr className="full-bleed-hr" />

        {/* TODO: Uncomment this once we have content to add */}
        {/* <ArticleNav setFilter={setFilter} /> */}

        {!showEmpty ? (
          <div className="empty-box">
            <h3>Come back later for news about our upcoming games!</h3>
          </div>
        ) : (
          <ArticleList articlesData={filteredArticles} />
        )}
      </div>
    </div>
  );
};

export default NewsPage;
