import React, { useState } from "react";
import {
  Col,
  Row,
  NavLink,
  Card,
  Container,
  Pagination,
} from "react-bootstrap"; // Import NavLink and Card

import "./articlefilterlist.css";
import articles from "../../pages/news/articles.json"; // Import the JSON file

// const books = [
//   {
//     id: 1,
//     title: "Article 1",
//     category: "Fantasy",
//     description: "This is a summary of Book 1. It's a fantasy novel...",
//     sourceImage: "https://via.placeholder.com/150", // Placeholder image
//   },
//   {
//     id: 2,
//     title: "Article 2",
//     category: "Science Fiction",
//     description: "This is a summary of Book 2. It's a science fiction novel...",
//     sourceImage: "https://via.placeholder.com/150", // Placeholder image
//   },
//   {
//     id: 3,
//     title: "Article 3",
//     category: "Mystery",
//     description: "This is a summary of Book 3. It's a mystery novel...",
//     sourceImage: "https://via.placeholder.com/150", // Placeholder image
//   },
//   {
//     id: 4,
//     title: "Article 4",
//     category: "Fantasy",
//     description: "This is a summary of Book 4. It's another fantasy novel...",
//     sourceImage: "https://via.placeholder.com/150", // Placeholder image
//   },
//   {
//     id: 5,
//     title: "Article 5",
//     category: "Science Fiction",
//     description:
//       "This is a summary of Book 5. Yet another science fiction novel...",
//     sourceImage: "https://via.placeholder.com/150", // Placeholder image
//   },
// ];

{
  /* <Card.Text>{book.description.slice(0, 50) + "..."} </Card.Text> */
}

function ArticleCard({ article }) {
  console.log("Inside ArticleCard", article);
  return (
    <div className="book-item">
      <Row>
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={article.imageUrl} alt={article.Title} />
        </Col>
        <Col xs={8}>
          <div className="book-details">
            <h3>{article.Title}</h3>
            <p className="tagline">{article.category}</p>
            <p>{article.ArticleContent.paragraph1.slice(0, 70) + "..."}</p>
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
    <div className="mt-3 pagination-wrapper" style={{ marginLeft: "150px" }}>
      <Pagination>
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
    <Container>
      <Row style={{ paddingBottom: "20px" }}>
        {/* Grid with responsive breakpoints */}
        {paginatedBooks.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            className="m-2"
            style={{ textAlign: "left" }}
          />
        ))}
      </Row>
      <Row xs={5}>
        <ArticlePagination
          totalPages={totalPages}
          currentPage={currentPage} // Pass current page as a prop
          handlePageChange={handlePageChange} // Pass handlePageChange function
        />
      </Row>
    </Container>
  );
}

function ArticleFilterList() {
  // const [selectedCategory, setSelectedCategory] = useState("");
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

  console.log(filteredArticles);
  return (
    <div className="d-flex">
      <Container>
        <Row xs={6} className="justify-content-center">
          {" "}
          {/* Outer Row */}
          <Col xs={6}>
            {" "}
            {/* Content column */}
            <Container>
              <ArticleList
                filteredArticles={filteredArticles}
                currentPageReset={currentPage}
              />
            </Container>
          </Col>
          <Col xs={4} className="d-flex flex-column">
            {" "}
            {/* Filter column */}
            <NavLink
              className={`py-2 px-3 text-left border-bottom ${
                filter === "" || showAllArticles ? "active" : ""
              }`} // Style based on selection
              href="#"
              onClick={() => handleSelect("all")}
            >
              All
            </NavLink>
            <NavLink
              className={`py-2 px-3 text-left border-bottom ${
                filter === "inProgress" ? "active" : ""
              }`} // Style based on selection
              href="#"
              onClick={() => handleSelect("inProgress")}
            >
              Games In Progress
            </NavLink>
            <NavLink
              className={`py-2 px-3 text-left border-bottom ${
                filter === "completed" ? "active" : ""
              }`} // Style based on selection
              href="#"
              onClick={() => handleSelect("completed")}
            >
              Games
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArticleFilterList;