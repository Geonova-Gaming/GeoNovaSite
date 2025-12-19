import React from "react";
import { Image } from "react-bootstrap";
import "./aboutUs.css";

import Bard from "../../assets/images/bardsemblem.png";
import Coders from "../../assets/images/codingemblem_.png";
import Artists from "../../assets/images/artistemblem.png";
import Marketers from "../../assets/images/marketingemblem_.png";
import Geonova from "../../assets/images/rainbowGNlogoCopy.png";

const aboutUsData = [
  {
    id: 1,
    image: Geonova,
    heading: "Who We Are",
    subheading: "A passionate group of writers, musicians, developers, and artists",
    color: "#ff66ff",
  },
  {
    id: 2,
    image: Artists,
    heading: "Artists",
    subheading: "Aiming to create art that captures our vision",
    color: "#00eaff",
  },
  {
    id: 3,
    image: Coders,
    heading: "Coders",
    subheading: "Create fun and engaging games for everyone",
    color: "#39ff14",
  },
  {
    id: 4,
    image: Bard,
    heading: "Bards",
    subheading: "Composing memorable music for our new and exciting projects",
    color: "#ffae00",
  },
  {
    id: 5,
    image: Marketers,
    heading: "Marketers",
    subheading: "Creating awareness and driving growth for our projects",
    color: "#ff4444",
  },
];

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-header">About Us</h1>
      <hr className="about-hr" />

      <div className="about-grid">
        {aboutUsData.map((item) => (
          <div
            key={item.id}
            className="about-item"
            style={{ "--glow-color": item.color }}
          >
            <Image className="about-img" src={item.image} alt={item.heading} />
            <h3>{item.heading}</h3>
            <p>{item.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
