import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Pagination,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";

import "./articlefilterlist.css";
import articles from "../../pages/news/articles.json";
import imagen from "../../assets/images/gnLogo.png";
import news from "../../assets/images/GeoNovaSnowyBanner.png";
import GeoNovaIcon from "../../assets/images/gnLogo.png";

import ImageWithTransition from "../../components/ImageBackground/ImageBackground";

// ------------------ ArticleCard ------------------
function ArticleCard({ article }) {
  return (
    <div className="book-item">
      <Row>
        <Col xs={3} className="d-flex justify-content-center align-items-center">
          <img src={imagen} alt={article.title} width={"200px"} />
        </Col>
        <Col xs={9}>
          <div className="book-details style-item">
            <h3 className="gradient-color">{article.title}</h3>
            <p className="tagline">{article.category}</p>
            <p>{article.articleContent.paragraph1.slice(0, 70) + "..."}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

// ------------------ ArticlePagination ------------------
function ArticlePagination({ totalPages, currentPage, handlePageChange }) {
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

// ------------------ ArticleList ------------------
function ArticleList({ filteredArticles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const isArticlePopulated = filteredArticles.length > 0;

  return (
    <>
      {!isArticlePopulated ? (
        <>
          <Row>
            {paginatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Row>
          <Row xs={12}>
            <ArticlePagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </Row>
        </>
      ) : (
        <Container fluid className="news-empty-message">
          <h4>
            News coming soon, keep a lookout on our social media for updates!
          </h4>
        </Container>
      )}
    </>
  );
}

// ------------------ ArticleFilterList ------------------
function ArticleFilterList() {
  const location = useLocation();
  const [showAllArticles, setShowAllArticles] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const handleSelect = (category) => {
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
        )
      : filter === "completed"
      ? articles.filter(
          (article) => article.isGameComplete && article.tag === "Game"
        )
      : [];

  const isArticlePopulated = filteredArticles.length > 0;

  return (
    <div className="d-flex py-5">
      <ImageWithTransition image={news} section={"news"} />
      <Container fluid className="w-100 z-1 full-box-shadow">
        <div xs={12} className="my-5">
          <h2 className="my-h2 text-center my-3 py-2 z-2">News</h2>
          <hr className="my-hr" />
        </div>
        <Row xs={12} className="justify-content-center m-auto mb-4">
          <Col xs={8}>
            <ArticleList filteredArticles={filteredArticles} />
          </Col>
          {/* TODO: Revert this once we have articles in place */}
          {/* <Col xs={4}>
            {!isArticlePopulated && (
              <Container className="d-flex flex-column border-gradient">
                <Link
                  to="/all"
                  className={`py-2 px-3 text-left border-bottom ${
                    location.pathname === "/" || showAllArticles ? "active" : ""
                  }`}
                >
                  All
                </Link>
                <Link
                  to="/inProgress"
                  className={`py-2 px-3 text-left border-bottom ${
                    location.pathname.includes("inProgress") ? "active" : ""
                  }`}
                >
                  Games In Progress
                </Link>
                <Link
                  to="/completed"
                  className={`py-2 px-3 text-left border-bottom ${
                    location.pathname.includes("completed") ? "active" : ""
                  }`}
                >
                  Games
                </Link>
                <div className="h-100">
                  <div className="position-relative image-container-little">
                    <img width={"100%"} src={GeoNovaIcon} alt="GeoNova Icon" />
                  </div>
                </div>
              </Container>
            )}
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default ArticleFilterList;
