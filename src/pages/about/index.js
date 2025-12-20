import React, { useState, useEffect } from "react";

import Image from "react-bootstrap/Image";
import "./about.css";
import { Col, Row } from "react-bootstrap";
import { t } from "i18next";
import { useLocation } from "react-router-dom";

import { Container, Card } from "react-bootstrap/";

import Logo from "../../assets/images/rainbowGNlogo.png";

// ARTIST
import Naomi from "../../assets/team_images/artists/Naomi.png";
import Ryan from "../../assets/team_images/artists/Ryan.png";
import Nimi from "../../assets/team_images/artists/Nimi.png";

// ARTIST

// CODERS
import Nico from "../../assets/team_images/coders/Nico.jpg";
import Tam from "../../assets/team_images/coders/Tam1.png";
import Carl from "../../assets/team_images/coders/Carl2.png";
import Anthony from "../../assets/team_images/coders/Anthony1.png";
import Brandon from "../../assets/team_images/coders/Brandon.png";
import Cameron from "../../assets/team_images/coders/Cameron1.png";
import Daniel from "../../assets/team_images/coders/Daniel.png";
import India from "../../assets/team_images/coders/India.png";
import Paul from "../../assets/team_images/coders/Paul.png";
import Steffan from "../../assets/team_images/coders/Steffan1.png";
// CODERS

// WRITERS
import Alunaria from "../../assets/team_images/writers/Alunaria.png";
import Zaku from "../../assets/team_images/writers/Zaku.png";
import Gracie from "../../assets/team_images/writers/Gracie.png";
// WRITERS

// BARDS
import Michelle from "../../assets/team_images/bards/Michelle.png";
import Rubenstein from "../../assets/team_images/bards/Rubenstein.png";
import Rachel from "../../assets/team_images/bards/Rachel2.png";
import Joshua from "../../assets/team_images/bards/Joshua.png";
// BARDS

// MARKETERS
import Rosy from "../../assets/team_images/marketers/rosy.png";
import Carolina from "../../assets/team_images/marketers/Carolina.png";
import Sara from "../../assets/team_images/marketers/Sara.png";

//EXTRA HELPERS
import Guilherme from "../../assets/team_images/external/Guilherme.png";

function PageSection({ sectionName, translatedArray, cardColor, dataTarget }) {
  const location = useLocation();

  // Scroll to top on route change (except initial render)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <div className="page-section-style" id={dataTarget}>
      <Row>
        <Col>
          <h1
            className="header"
            style={{
              textShadow: `3px 3px 15px ${cardColor}`,
              width: "fit-content",
              margin: "auto",
            }}
          >
            {sectionName}
            <hr
              style={{
                width: "100%",
                boxShadow: `0px -1px 59px 56px ${cardColor}`,
                border: "none",
                background: `${cardColor}`,
              }}
              className="my-hr"
            />
          </h1>
          <hr
            style={{
              width: "50%",
              boxShadow: `0px 54px 79px 59px ${cardColor}`,
              border: "none",
              background: `${cardColor}`,
            }}
            className="my-hr"
          />
          {/* Title using sectionName prop */}
        </Col>
      </Row>
      <Row className="m-5 justify-content-center">
        {translatedArray.map((paragraph, index) => (
          <Cards key={index} buddy={paragraph} cardColor={cardColor} />
        ))}
      </Row>
    </div>
  );
}

function Cards({ key, buddy, cardColor }) {
  return (
    <Card
      className="cards-style"
      style={{ boxShadow: `0px 0px 63px -9px ${cardColor}` }}
    >
      <Card.Title>
        <strong>{buddy?.name}</strong>
      </Card.Title>
      <div className="image-container-about">
        <Card.Img
          variant="top"
          src={buddy?.image}
          className="card-image-style"
        />
        <button className="photo-button-about">Learn More</button>
      </div>
      <Card.Body
        className="card-body"
        style={{ border: `1px solid ${cardColor}` }}
      >
        <Card.Text>
          <strong>Abilities:</strong> {buddy?.role}
        </Card.Text>
        <Card.Text>
          <strong>Favorite Game:</strong> {buddy?.favoritegame}
        </Card.Text>
        {/* <Card.Text><strong>Descriptión:</strong> {buddy?.description?.slice(0, 20) + (buddy?.description?.length > 20 ? "..." : "")}</Card.Text> */}
        <Card.Text className="description-text">
          <strong>Descriptión:</strong> {buddy?.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function ImageTextSection({ imageUrl, subHeading, bodyText1, bodyText2 }) {
  return (
    <Container>
      <Row>
        {/* Add margin-top for spacing */}
        <Col sm={3}>
          <Image
            src={imageUrl}
            fluid
            className="images-about-us border-gradient"
            width={200}
          />{" "}
          {/* Large image */}
        </Col>
        <Col sm={9} className="d-flex align-items-center">
          <Container>
            <Row>
              <h2 className="my-h2 subtitle-styles">{subHeading}</h2>{" "}
              {/* Sub heading text */}
            </Row>
            <Row>
              <p className="my-h2 paragraph-styles">{bodyText1}</p>{" "}
              {/* Body text for sub heading */}
              <p className="my-h2 paragraph-styles">{bodyText2}</p>{" "}
              {/* Body text for sub heading */}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

const AboutPage = () => {
  const coderTranslationArray = [
    { key: "about.coderSection1", image: Tam },
    { key: "about.coderSection2", image: Carl },
    { key: "about.coderSection3", image: Daniel },
    { key: "about.coderSection4", image: India },
    { key: "about.coderSection5", image: Paul },
    { key: "about.coderSection6", image: Steffan },
    { key: "about.coderSection7", image: Brandon },
    { key: "about.coderSection8", image: Anthony },
    { key: "about.coderSection9", image: Cameron },
  ];

  const artistTranslationArray = [
    { key: "about.artistSection1", image: Naomi },
    { key: "about.artistSection2", image: Ryan },
    { key: "about.artistSection3", image: Nimi },
  ];

  const bardTranslationArray = [
    { key: "about.bardSection1", image: Michelle },
    { key: "about.bardSection2", image: Rubenstein },
    { key: "about.bardSection3", image: Rachel },
    { key: "about.bardSection4", image: Joshua },
  ];

  const marketersTranslationsArray = [
    { key: "about.marketersSection1", image: Rosy },
    { key: "about.marketersSection2", image: Carolina },
    { key: "about.marketersSection3", image: Sara },
  ];

  const writersTranslationArrays = [
    { key: "about.writersSection1", image: Zaku },
    { key: "about.writersSection2", image: Alunaria },
    { key: "about.writersSection3", image: Gracie },
  ];

  const externalsTranslationArrays = [
    { key: "about.externalsSection1", image: Nico },
    { key: "about.externalsSection2", image: Guilherme },
  ];

  const artistTranslations = artistTranslationArray.map(({ key, image }) => ({
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    description: t(`${key}.description`),
    favoritegame: t(`${key}.favoritegame`),
    image, // se agrega aquí la foto
  }));
  const coderTranslations = coderTranslationArray.map(({ key, image }) => ({
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    description: t(`${key}.description`),
    favoritegame: t(`${key}.favoritegame`),
    image, // se agrega aquí la foto
  }));
  const marketersTranslations = marketersTranslationsArray.map(
    ({ key, image }) => ({
      name: t(`${key}.name`),
      role: t(`${key}.role`),
      description: t(`${key}.description`),
      favoritegame: t(`${key}.favoritegame`),
      image, // se agrega aquí la foto
    })
  );
  const bardTranslations = bardTranslationArray.map(({ key, image }) => ({
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    description: t(`${key}.description`),
    favoritegame: t(`${key}.favoritegame`),
    image, // se agrega aquí la foto
  }));
  const writersTranslations = writersTranslationArrays.map(
    ({ key, image }) => ({
      name: t(`${key}.name`),
      role: t(`${key}.role`),
      description: t(`${key}.description`),
      favoritegame: t(`${key}.favoritegame`),
      image, // se agrega aquí la foto
    })
  );
  const externalsTranslations = externalsTranslationArrays.map(
    ({ key, image }) => ({
      name: t(`${key}.name`),
      role: t(`${key}.role`),
      description: t(`${key}.description`),
      favoritegame: t(`${key}.favoritegame`),
      image, // se agrega aquí la foto
    })
  );

  const [activeSection, setActiveSection] = useState("top");

useEffect(() => {
  const sections = document.querySelectorAll(".page-section-style");
  const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.reduce((max, entry) =>
      entry.intersectionRatio > max.intersectionRatio ? entry : max
    );
    if (visible.isIntersecting) {
      setActiveSection(visible.target.id);
    }
  },
  {
    threshold: [0.25, 0.5, 0.75], // multiple thresholds for finer ratios
    rootMargin: "0px 0px -40% 0px",
  }
);

  sections.forEach((section) => observer.observe(section));

  // Extra listener for "top of page"
  const handleScroll = () => {
    if (window.scrollY <50) {
      setActiveSection("top");
    }
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    sections.forEach((section) => observer.unobserve(section));
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return (
    <div className="main-content">
     <div className="list-guys-content">
  <ul>
    <li>
      <button
        style={{ "--hover-color": "#3398E0" }} // Artist cardColor
        className={
      activeSection === "artist" || activeSection === "top" ? "active" : ""
    }
        onClick={() =>
          document.getElementById("artist")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Artist
      </button>
    </li>
    <li>
      <button
        style={{ "--hover-color": "#33C572" }} // Coders cardColor
        className={
      activeSection === "coders" || activeSection === "top" ? "active" : ""
    }
        onClick={() =>
          document.getElementById("coders")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Coders
      </button>
    </li>
    <li>
      <button
        style={{ "--hover-color": "#E41F64" }} // Marketers cardColor
        className={
      activeSection === "marketers" || activeSection === "top" ? "active" : ""
    }
        onClick={() =>
          document.getElementById("marketers")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Marketers
      </button>
    </li>
    <li>
      <button
        style={{ "--hover-color": "#E67F23" }} // Writers cardColor
        className={
      activeSection === "writers" || activeSection === "top" ? "active" : ""
    }
        onClick={() =>
          document.getElementById("writers")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Writers
      </button>
    </li>
    <li>
      <button
        style={{ "--hover-color": "#E8C511" }} // Bards cardColor
        className={
      activeSection === "bards" || activeSection === "top" ? "active" : ""
    }
        onClick={() =>
          document.getElementById("bards")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Bards
      </button>
    </li>
    <li>
      <button
        style={{ "--hover-color": "#D7D6D6FF" }} // Externals cardColor
        className={
      activeSection === "externals" || activeSection === "top" ? "active" : ""
    }
        onClick={() =>
          document.getElementById("externals")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Externals
      </button>
    </li>
  </ul>
</div>

      <h1 className="header">{t("about.title")}</h1>
      <hr />
      <ImageTextSection
        imageUrl={Logo}
        // subHeading={t("about.subtitle")}
        bodyText1= {t("about.bodyP1")}
       
        bodyText2= {t("about.bodyP2")}
      />
      <PageSection
        sectionName={"Artists"}
        translatedArray={artistTranslations}
        cardColor={"#3398E0"}
        dataTarget={"artist"}
      />
      <PageSection
        sectionName={"Coders"}
        translatedArray={coderTranslations}
        cardColor={"#33C572"}
        dataTarget={"coders"}
      />
      <PageSection
        sectionName={"Marketers"}
        translatedArray={marketersTranslations}
        cardColor={"#E41F64"}
        dataTarget={"marketers"}
      />
      <PageSection
        sectionName={"Writers"}
        translatedArray={writersTranslations}
        cardColor={"#E67F23"}
        dataTarget={"writers"}
      />
      <PageSection
        sectionName={"Bards"}
        translatedArray={bardTranslations}
        cardColor={"#E8C511"}
        dataTarget={"bards"}
      />
      <PageSection
        sectionName={"Externals"}
        translatedArray={externalsTranslations}
        cardColor={"#D7D6D6FF"}
        dataTarget={"externals"}
      />
    </div>
  );
};

export default AboutPage;
