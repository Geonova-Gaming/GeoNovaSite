import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SocialButtonGroup from "../SocialMediaButtons";
import "./subbar.css";
import { t } from "i18next";

const SubBar = () => {
  return (
    <div className="subbar-wrapper">
      <Container fluid className="subbar-container">
        <Row className="subbar-row">
          {/* Left */}
          <Col xs={12} md={4} className="subbar-left">
            <p>{t("subBar.copyright")}</p>
          </Col>

          {/* Center */}
          <Col xs={12} md={4} className="subbar-center">
            <SocialButtonGroup />
          </Col>

          {/* Right */}
          <Col xs={12} md={4} className="subbar-right">
            <p>{t("subBar.tagline")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubBar;
