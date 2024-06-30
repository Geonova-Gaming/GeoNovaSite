import React from "react";
import { Image } from "react-bootstrap";
// import "./ArticleDetails.css";

const ParagraphList = ({ articleContent }) => {
  return (
    <div>
      {Object.keys(articleContent).map((key) => (
        <p key={key} className="mb-2">
          {key === "paragraph1" ? (
            <>
              {" "}
              {/* Leading space for first paragraph */}
              {articleContent[key]}
            </>
          ) : (
            <>
              <br /> {/* Line break for subsequent paragraphs */}
              {articleContent[key]}
            </>
          )}
        </p>
      ))}
    </div>
  );
};

const ArticleDetails = ({ article }) => {
  //TODO: Rework this conditional statement and modify the keys to have an actual dedicated article type
  const articleCategory =
    article.isGameComplete === true ? "Game" : "Game In Progress";

  return (
    <div className="d-flex flex-column mb-4">
      <h3 className="mb-2">{article.Title}</h3>
      <p className="text-muted mb-2">
        {article.Date} - {articleCategory}
      </p>
      <Image
        src={article.imageUrl}
        alt={article.name}
        fluid
        rounded
        className="mb-3"
      />
      <ParagraphList articleContent={article.ArticleContent} />
    </div>
  );
};

export default ArticleDetails;
