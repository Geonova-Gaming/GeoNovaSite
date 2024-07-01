import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import MiscNav from "../components/SecondaryNavBar";
import NavBar from "../components/NavBar";
import AboutPage from "./about";
import ContactPage from "./contact";
import DonatePage from "./donate";
import GamesPage from "./games";
import LoveBugGamePage from "./games/releases/LoveBugGame";
import MainPage from "./home";
import NewsPage from "./news";
import i18n from "../i18n";
import SubBar from "../components/SubBar";
import LovebugArticlePage from "./news/ArticlePages/lovebugArticle";
// import "/src/styles/global.scss";

function App() {
  return (
    <HashRouter>
      <NavBar /> {/* Render NavBar inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route
          path="/games/releases/LoveBugGame"
          element={<LoveBugGamePage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/lovebugs" element={<LovebugArticlePage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <SubBar />
      <MiscNav />
    </HashRouter>
  );
}

export default App;
