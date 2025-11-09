import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import articles from "./articles.json"; // Import the JSON file
import Logo from "../../assets/images/Geonova2.jpg";

import "./news.css";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function ArticleCard({ article, key }) {
  const location = useLocation();

  // Scroll to top on route change (except initial render)
  useEffect(() => {
    console.log(article);
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <Card style={{ width: "18rem" }} className="cards-style-news">
      <Card.Img variant="top" src={Logo} />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Text>{article.date}</Card.Text>
        <Card.Title>{article.title}</Card.Title>
        <Button as={Link} to={article.link} variant="secondary" className="custom-button-news border-1 rounded-0">
          Continue Reading
        </Button>
      </Card.Body>
    </Card>
  );
}

function ArticleList({ articlesData }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {" "}
      {/* Center articles */}
      {articlesData.map((article, index) => (
        <ArticleCard key={index} article={article} className="m-2" />
      ))}
    </div>
  );
}

function ArticleNav({ setFilter }) {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link
          className={"custom-button-news"}
          onClick={() => setFilter("all")}
        >
          All Posts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          className={"custom-button-news"}
          onClick={() => setFilter("inProgress")}
        >
          Games In Progress
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          className={"custom-button-news"}
          onClick={() => setFilter("completed")}
        >
          Games
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const NewsPage = () => {
  const [filter, setFilter] = useState("all"); // Initial filter state

  console.log(articles);

  const filteredArticles =
    filter === "all"
      ? articles
      : filter === "inProgress"
      ? articles.filter(
          (article) => !article.isGameComplete && article.tag === "Game"
        ) // Filter incomplete "Game" articles
      : filter === "completed"
      ? articles.filter(
          (article) => article.isGameComplete && article.tag === "Game"
        ) // Filter completed "Game" articles
      : []; // Empty array for invalid filters

  return (
    <div className="main-content">
      <Container fluid className="mt-5">
        <Container>
          <h1 className="header">News</h1>
          <hr />
        </Container>
        <Container className="d-flex justify-content-center mt-5 p-2">
          {" "}
          {/* Center content */}
          <ArticleNav setFilter={setFilter} />
        </Container>
        <Container className="d-flex justify-content-center mt-5 p-2">
          <ArticleList articlesData={filteredArticles} />
        </Container>
      </Container>
    </div>
  );
};

export default NewsPage;
