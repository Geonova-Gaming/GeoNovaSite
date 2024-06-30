import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import articles from "./articles.json"; // Import the JSON file

import "./news.css";
import { Nav } from "react-bootstrap";

function ArticleCard({ article }) {
  return (
    <Card style={{ width: "18rem" }} className="article-card">
      <Card.Img variant="top" src="https://via.placeholder.com/800x400" />
      <Card.Body className="d-flex flex-column align-items-center">
        {" "}
        {/* Centered content */}
        <Card.Text>{article.Date}</Card.Text>
        <Card.Title>{article.Title}</Card.Title>
        <Button variant="success" href={article.link}>
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
      {articlesData.map((article) => (
        <ArticleCard key={article.Title} article={article} className="m-2" />
      ))}
    </div>
  );
}

function ArticleNav({ setFilter }) {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link onClick={() => setFilter("all")}>All Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link onClick={() => setFilter("inProgress")}>
          Games In Progress
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link onClick={() => setFilter("completed")}>Games</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const NewsPageALT = () => {
  const [filter, setFilter] = useState("all"); // Initial filter state

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
    <Container className="p-3">
      <Container className="p-5 mb-4">
        <h1 className="header">News Page</h1>
        <hr />
      </Container>
      <div className="d-flex justify-content-center">
        {" "}
        {/* Center content */}
        <ArticleNav setFilter={setFilter} />
      </div>
      <ArticleList articlesData={filteredArticles} />
    </Container>
  );
};

export default NewsPageALT;
