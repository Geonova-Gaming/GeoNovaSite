import React, { useState } from "react";
import {
  Col,
  Row,
  NavLink,
  Card,
  Container,
  Pagination,
} from "react-bootstrap"; // Import NavLink and Card
import { Link, useLocation } from "react-router-dom";

import "./articlefilterlist.css";
import articles from "../../pages/news/articles.json"; // Import the JSON file
import imagen from "../../assets/images/Genova-Icon.png"; // Import the JSON file
import news from "../../assets/images/news2.png"; // Import the JSON file
import GeoNovaIcon from "../../assets/images/Geonova1.png"; // Import the JSON file

import ImageWithTransition from "../../components/ImageBackground/ImageBackground";
{
  /* <Card.Text>{book.description.slice(0, 50) + "..."} </Card.Text> */
}

function ArticleCard({ article }) {
  console.log("Inside ArticleCard", article);
  return (
    <div className="book-item">
      <Row>
        <Col
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={imagen} alt={article.title} width={"200px"} />
          {/* <img src={article.imageUrl} alt={article.title} /> */}
        </Col>
        <Col xs={9}>
          <div className="book-details style-item">
            <h3 className="gradient-color">{article.title}</h3>
            <p className="tagline">{article.category}</p>
            <p>{article.articleContent.paragraph1.slice(0, 70) + "..."}</p>
          </div>
        </Col>
        <br />
      </Row>
    </div>
  );
}

// TODO: Make a comparison to the current category which will determine how to modifiy the pagination
function ArticlePagination({ totalPages, currentPage, handlePageChange }) {
  console.log(currentPage);
  // handlePageChange(1);
  //TODO: Add a state here which checks what the previous page value was. If it was found, then intialize it to 1 if it was a different category
  return (
    <div className="mt-3 pagination-wrapper">
      <Pagination className="text-center justify-content-center pagination-style">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}

function ArticleList({ filteredArticles }) {
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("This is the page number", pageNumber);
  };
  const itemsPerPage = 2;

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const paginatedBooks = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log("This is paginatedBooks", paginatedBooks);

  return (
    <>
      <Row>
        {/* Grid with responsive breakpoints */}
        {paginatedBooks.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            style={{ textAlign: "left" }}
          />
        ))}
      </Row>
      <Row xs={12}>
        <ArticlePagination
          totalPages={totalPages}
          currentPage={currentPage} // Pass current page as a prop
          handlePageChange={handlePageChange} // Pass handlePageChange function
        />
      </Row>
    </>
  );
}

function ArticleFilterList() {
  const location = useLocation(); // Get current location for active link
  const [showAllArticles, setShowAllArticles] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [filter, setFilter] = useState("all"); // Initial filter state

  const handleSelect = (category) => {
    // Reset current page to 1 before re-rendering
    setCurrentPage(1);
    setFilter(category);
    setShowAllArticles(category === "all");
  };

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
    <div className="d-flex py-5">
      <ImageWithTransition image={news} section={"news"} />
      <Container fluid className="w-100 z-1 full-box-shadow">
        <div xs={12} className="my-5">
          <h2 className="my-h2 text-center my-3 py-2 z-2">News</h2>
          <hr className="my-hr" />
        </div>
        <Row xs={12} className="justify-content-center m-auto mb-4">
          {" "}
          {/* Outer Row */}
          <Col xs={8}>
            {" "}
            {/* Content column */}
            <ArticleList
              filteredArticles={filteredArticles}
              currentPageReset={currentPage}
            />
          </Col>
          <Col xs={4}>
            <Container className="d-flex flex-column border-gradient">
              {" "}
              {/* Filter column */}
              <Link
                to="/all" // Replace with appropriate route for "All"
                className={`py-2 px-3 text-left border-bottom ${
                  location.pathname === "/" || showAllArticles ? "active" : ""
                }`} // Style based on selection
              >
                All
              </Link>
              <Link
                to="/inProgress" // Replace with appropriate route for "Games In Progress"
                className={`py-2 px-3 text-left border-bottom ${
                  location.pathname.includes("inProgress") ? "active" : ""
                }`} // Style based on selection
              >
                Games In Progress
              </Link>
              <Link
                to="/completed" // Replace with appropriate route for "Games"
                className={`py-2 px-3 text-left border-bottom ${
                  location.pathname.includes("completed") ? "active" : ""
                }`} // Style based on selection
              >
                Games
              </Link>
              <div className="h-100">
                <div className="position-relative image-container-little">
                  <img width={ "100%" } src={GeoNovaIcon} />
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArticleFilterList;
