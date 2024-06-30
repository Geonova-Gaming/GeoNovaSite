import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";

import Container from "react-bootstrap/Container";
import i18n from "i18next";

import "./donate.css";
const DonatePage = () => {
  const { t } = useTranslation();
  return (
    <div className="p-5 main-content donate-wrapper">
      <Container className="p-5">
        <Container className="p-5 ">
          <h1 className="header">{t("donate.title")}</h1>
          <br />
          <br />
          <h2 className="my-h2">{t("donate.bodyP1") + t("donate.bodyP2")}</h2>
        </Container>
      </Container>
    </div>
  );
};

export default DonatePage;
