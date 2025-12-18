import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";
import GeoNova from "../../assets/images/gnLogo.png";

function NavBar() {
  const location = useLocation();
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  // Track scroll to darken background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsScrollingDown(currentScrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <img alt="" src={GeoNova} className="d-inline-block navbarImage" />
        <div className="degrade geonovaText">
          <div className="navText">GEONOVA GAMING</div>
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
            <Nav.Link as={Link} to="/" eventKey="/">
              <span className={location.pathname === "/" ? "glitch-text" : ""}>
                Home
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/games" eventKey="/games">
              <span
                className={location.pathname === "/games" ? "glitch-text" : ""}
              >
                Games
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/news" eventKey="/news">
              <span
                className={location.pathname === "/news" ? "glitch-text" : ""}
              >
                News
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/about" eventKey="/about">
              <span
                className={location.pathname === "/about" ? "glitch-text" : ""}
              >
                About
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/contact" eventKey="/contact">
              <span
                className={location.pathname === "/contact" ? "glitch-text" : ""}
              >
                Contact
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
