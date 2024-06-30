import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import HeroSection from "../../components/HeroSection";
import GameList from "../../components/GameList";
import AboutUs from "../../components/AboutUs";
import ContactSupport from "../../components/ContactSupport";

import "./home.css";
import "../../styles/global.css";
import ArticleFilterList from "../../components/ArticleFilterList";
const MainPage = () => (
  <>
    <div className="main-content">
      {" "}
      <HeroSection />
      <div className="d-flex justify-content-center flex-column">
        <h2 class="my-h2 text-center">Our Games</h2> <hr className="my-hr" />
        <GameList />
        <h2 class="my-h2 text-center">About Us</h2> <hr className="my-hr" />
        <AboutUs />
        <h2 class="my-h2 text-center">News</h2> <hr className="my-hr" />
        <ArticleFilterList />
        <ContactSupport />
      </div>
    </div>
  </>
);

export default MainPage;
