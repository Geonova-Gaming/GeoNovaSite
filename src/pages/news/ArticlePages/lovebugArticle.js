import React from "react";
import Container from "react-bootstrap/Container";
import ArticleDetails from "../../../components/ArticleDetails";
import articles from "../articles.json";

const LovebugArticlePage = () => {
  // Find the article with the title "Article Title 1"
  const targetArticle = articles.find(
    (article) => article.Title === "Article Title 1"
  );
  if (targetArticle) {
    console.log(targetArticle);
    // console.log(targetArticle.Date); // Access article date
    // console.log(targetArticle.ArticleContent.paragraph1); // Access first paragraph
  }

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">News Page</h1>
        <hr />
      </Container>
      {targetArticle && <ArticleDetails article={targetArticle} />}
    </Container>
  );
};

export default LovebugArticlePage;
