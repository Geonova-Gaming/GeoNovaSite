import React, { useState, useEffect } from "react";

import Image from "react-bootstrap/Image";
import "./about.css";
import { Col, Form, Row } from "react-bootstrap";
import { t } from "i18next";
import { useLocation } from "react-router-dom";

import { Container, Button, Card } from "react-bootstrap/";

import Logo from "../../assets/images/Geonova2.jpg";

// ARTIST
import Naomi from "../../assets/team_images/artists/Naomi.png";
import Guilherme from "../../assets/team_images/artists/Guilherme.png";
import Ryan from "../../assets/team_images/artists/Ryan.png";
import Elysia from "../../assets/team_images/artists/Elysia1.png";
import Bao from "../../assets/team_images/artists/Bao.png";
import Marlie from "../../assets/team_images/artists/Marlie.png";

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
import Mehki from "../../assets/team_images/coders/Mehki.png";
import Nick from "../../assets/team_images/coders/Nick.png";
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
import Hamilton from "../../assets/team_images/marketers/Hamilton.png";
import Sara from "../../assets/team_images/marketers/Sara.png";
// MARKETERS

function PageSection({
  sectionName,
  srcURL,
  translatedArray,
  cardColor,
  dataTarget,
}) {
  const location = useLocation();

  // Scroll to top on route change (except initial render)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <div className="page-section-style">
      <Row>
        <Col>
          <h1
            className="header"
            style={{
              textShadow: `3px 3px 15px ${cardColor}`,
              width: "fit-content",
              margin: "auto",
            }}
            id={dataTarget}
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
      {/* <Row className="mt-5">
        <Col sm={4}>
          <Image src={srcURL} roundedCircle className="mb-3" fluid />{" "}
        </Col>
        <Col sm={8}>
          {translatedArray.map((paragraph, index) => (
            <p key={index}>
              <strong>{paragraph.split(": ")[0]}</strong>:{" "}
              {paragraph.split(": ")[1]}
            </p>
          ))}
        </Col>
      </Row> */}
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
      <button className="photo-button-about">
        ¡Click Me!
      </button>
      </div>
      <Card.Body className="card-body" style={{ border: `1px solid ${cardColor}`}}>
        <Card.Text><strong>Abilities:</strong> {buddy?.role}</Card.Text>
        <Card.Text><strong>Favorite Game:</strong> {buddy?.favoritegame}</Card.Text>
        <Card.Text><strong>Descriptión:</strong> {buddy?.description?.slice(0, 20) + (buddy?.description?.length > 20 ? "..." : "")}</Card.Text>
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
    { key: "about.coderSection2", image: Nico },
    { key: "about.coderSection3", image: Carl },
    { key: "about.coderSection4", image: Nick },
    { key: "about.coderSection5", image: Daniel },
    { key: "about.coderSection6", image: India },
    { key: "about.coderSection7", image: Paul },
    { key: "about.coderSection8", image: Steffan },
    { key: "about.coderSection9", image: Brandon },
    { key: "about.coderSection10", image: Anthony },
    { key: "about.coderSection11", image: Mehki },
    { key: "about.coderSection12", image: Cameron },
  ];

  const artistTranslationArray = [
    { key: "about.artistSection1", image: Naomi },
    { key: "about.artistSection2", image: Guilherme },
    { key: "about.artistSection3", image: Ryan },
    { key: "about.artistSection4", image: Elysia },
    { key: "about.artistSection5", image: Bao },
    { key: "about.artistSection6", image: Marlie },
  ];

  const bardTranslationArray = [
    { key: "about.bardSection1", image: Michelle },
    { key: "about.bardSection2", image: Rubenstein },
    { key: "about.bardSection3", image: Rachel },
    { key: "about.bardSection4", image: Joshua },
  ];
  
  const marketersTranslationsArray = [
    { key: "about.marketersSection1", image: Hamilton },
    { key: "about.marketersSection2", image: Sara },
  ];

  const writersTranslationArrays = [
    { key: "about.writersSection1", image: Alunaria },
    { key: "about.writersSection2", image: Zaku },
    { key: "about.writersSection3", image: Gracie },
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
  const marketersTranslations = marketersTranslationsArray.map(({ key, image }) => ({
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    description: t(`${key}.description`),
    favoritegame: t(`${key}.favoritegame`),
    image, // se agrega aquí la foto
  }));
  const bardTranslations = bardTranslationArray.map(({ key, image }) => ({
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    description: t(`${key}.description`),
    favoritegame: t(`${key}.favoritegame`),
    image, // se agrega aquí la foto
  }));
  const writersTranslations = writersTranslationArrays.map(({ key, image }) => ({
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    description: t(`${key}.description`),
    favoritegame: t(`${key}.favoritegame`),
    image, // se agrega aquí la foto
  }));


  const artistURL =
    "https://cdn.discordapp.com/attachments/778680833153564693/1252456137639333918/rsh175m.png?ex=667593ec&is=6674426c&hm=27208a7bcfeea26e79871dbde004e6310f79a75e5f568bb75d7d359eea29714c&";

  const codersURL =
    "https://cdn.discordapp.com/attachments/778680833153564693/1252456137857564743/rsh175m.png?ex=667593ec&is=6674426c&hm=dfdad42aa8dd34fec717d216dd6849c150048381c120e7a9e5fad98ff762dd06&";
  const bardURL =
    "https://cdn.discordapp.com/attachments/778680833153564693/1252456138050506852/rsh175m.png?ex=667593ec&is=6674426c&hm=91d15a5eae74101177eb2abb20c47405d61aa61f217f04c272df0c6b9442ae5a&";
  // const logoURL =
  // "https://img1.wsimg.com/isteam/ip/b4d39968-ce34-4e68-ac72-ba40d4530675/Babel%20Armada%20GeoNova%20Icon.png/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600";

  return (
    <div className="main-content">
      <div className="list-guys-content">
        <ul>
          <li>
            <a href="/#/about/#artist">Artist</a>
          </li>
          <li>
            <a href="/#/about/#coders">Coders</a>
          </li>
          <li>
            <a href="/#/about/#marketers">Marketers</a>
          </li>
          <li>
            <a href="/#/about/#writers">Writers</a>
          </li>
          <li>
            <a href="/#/about/#bards">Bards</a>
          </li>
        </ul>
      </div>
      <h1 className="header">{t("about.title")}</h1>
      <hr />
      <ImageTextSection
        imageUrl={Logo}
        // subHeading={t("about.subtitle")}
        bodyText1={
          "Founded in January of 2020, GeoNova Gaming has one goal which sets us apart from any other video game company out there...."
        }
        bodyText2={
          "Humans have always been telling stories and passing them down, teaching younger generations important values and morals, which in turn shaped the beginning of society...."
        }
      />
      <PageSection
        sectionName={"Artist"}
        srcURL={artistURL}
        translatedArray={artistTranslations}
        cardColor={"#3398E0"}
        dataTarget={"artist"}
      />
      <PageSection
        sectionName={"Coders"}
        srcURL={codersURL}
        translatedArray={coderTranslations}
        cardColor={"#33C572"}
        dataTarget={"coders"}
      />
      <PageSection
        sectionName={"Marketers"}
        srcURL={bardURL}
        translatedArray={marketersTranslations}
        cardColor={"#E41F64"}
        dataTarget={"marketers"}
      />
      <PageSection
        sectionName={"Writers"}
        srcURL={bardURL}
        translatedArray={writersTranslations}
        cardColor={"#E67F23"}
        dataTarget={"writers"}
      />
      <PageSection
        sectionName={"Bards"}
        srcURL={bardURL}
        translatedArray={bardTranslations}
        cardColor={"#E8C511"}
        dataTarget={"bards"}
      />
    </div>
  );
};

export default AboutPage;
