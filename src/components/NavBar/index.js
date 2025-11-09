import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";
// import GeoNova from "../../assets/images/GeoNovaLogo.png";
import GeoNova from "../../assets/images/Geonova.png";

function NavBar() {
  const location = useLocation();

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 0) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const applyGlitchEffect = () => {
      const glitchElements = document.querySelectorAll(".glitch-text");
      if (!glitchElements.length) return;

      const interval = setInterval(() => {
        glitchElements.forEach((element) => {
          element.style.opacity = "0.3";
          element.style.animation = "glitch 0.3s steps(1, end) alternate";

          setTimeout(() => {
            element.style.opacity = "1";
            element.style.animation = "none";
          }, 300);
        });
      }, 4000);

      return interval;
    };

    let glitchInterval = applyGlitchEffect();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        clearInterval(glitchInterval);
        glitchInterval = applyGlitchEffect();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(glitchInterval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Navbar
      fixed="top"
      className="navBarStyles"
      style={{
        ...(isScrollingDown ? { background: "rgba(0, 0, 0, 0.8)" } : {}),
        padding: "0px",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img alt="" src={GeoNova} className="d-inline-block navbarImage" />{" "}
        <div className="degrade geonovaText">
          <div className="navText">
            G<span className="glitch-text">E</span>
            ONO
            <span className="glitch-text">V</span>
            <span>A GAMI</span>
            <span className="glitch-text">NG</span>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ height: "100px" }}
        className="justify-content-end"
      >
        <Nav activeKey={location.pathname} className="ms-auto" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/games">
              <span className="glitch-text">Games</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/contact">
              <span className="glitch-text">Contact</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
