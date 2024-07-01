import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";

import "./games.css";

import GameCarousel from "../../components/Carousel";
import ControlledCarousel from "../../components/ControlledCarousel";
import { t } from "i18next";

const GamesPage = () => {
  const location = useLocation();

  // Scroll to top on route change (except initial render)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);
  return(


  <div className="p-5 main-content wrapper">
    <Container fluid className="p-5">
      <Container className="p-5 mb-4 rounded-3">
        <h1 className="header">{t("games.title")}</h1>
        <hr />
        {/* TODO: Decide if we want a controlled or automatic transitioning carousel */}
        {/* <GameCarousel /> */}
        <ControlledCarousel />
      </Container>
    </Container>
  </div>
  )
  }

export default GamesPage;
