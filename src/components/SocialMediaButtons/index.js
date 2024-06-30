import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import "./socialMediaButtons.css";

const socialMediaLinks = [
  {
    icon: "bi-discord",
    url: "https://discord.gg/mSj769D6",
  },
  {
    icon: "bi-instagram",
    url: "https://www.instagram.com/geonovagaming/",
  },
  {
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/company/68277434/admin/",
  },
  {
    icon: "bi-facebook",
    url: "https://www.facebook.com/114079207065524",
  },
  {
    icon: "bi-twitter-x",
    url: "https://www.twitter.com/GeonovaGaming",
  },
  {
    icon: "bi-reddit",
    url: "https://www.twitter.com/GeonovaGaming",
  },
];

function SocialButtonGroup() {
  return (
    <ButtonGroup className="d-flex justify-content-center">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="rounded-circle p-2 mx-2 social-media-icon my-social-button" // Add class
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={link.icon}
            style={{ fontSize: "2rem", color: "black" }}
          ></i>
        </a>
      ))}
    </ButtonGroup>
  );
}

export default SocialButtonGroup;
