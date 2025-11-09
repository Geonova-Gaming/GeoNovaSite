import React, { useState } from "react";
import { Button, Col, DropdownButton, Row } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import SocialButtonGroup from "../SocialMediaButtons";

import "./subbar.css";
import { t } from "i18next";
import { Container } from "react-bootstrap";

const SubBar = () => {
  return (
    <div className="main-content">
      <br />
      <br />
      <Container>
        <Row className="justify-content-between d-flex align-items-center">
          <Col xs={3} className="pl-0">
            {" "}
            {/*  */}
            <p> {t("subBar.copyright")} </p>
          </Col>
          <Col xs={6}>
            <SocialButtonGroup />
          </Col>
          <Col xs={3} className="pr-0 d-flex justify-content-end align-items-center">
            <p className="ms-2"> {t("subBar.tagline")} </p>
          </Col>
        </Row>
      </Container>
   
    </div>
  );
};

export default SubBar;
