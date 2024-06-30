import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./about.css";
import { Col, Form, Row } from "react-bootstrap";
import { t } from "i18next";

function PageSection({ sectionName, srcURL, translatedArray }) {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="header">{sectionName}</h1> <hr className="my-hr" />
          {/* Title using sectionName prop */}
        </Col>
      </Row>
      <Row className="mt-5">
        {" "}
        {/* Add margin-top for spacing */}
        <Col sm={4}>
          <Image src={srcURL} roundedCircle className="mb-3" fluid />{" "}
          {/* Placeholder image */}
        </Col>
        <Col sm={8}>
          {translatedArray.map((paragraph, index) => (
            <p key={index}>
              <strong>{paragraph.split(": ")[0]}</strong>:{" "}
              {paragraph.split(": ")[1]} {/* Bold text before ":" */}
            </p>
          ))}
        </Col>
      </Row>
    </div>
  );
}

function ImageTextSection({ imageUrl, subHeading, bodyText1, bodyText2 }) {
  return (
    <Row className="mt-5">
      {" "}
      {/* Add margin-top for spacing */}
      <Col sm={6}>
        <Image src={imageUrl} fluid className="img-thumbnail" />{" "}
        {/* Large image */}
      </Col>
      <Col sm={6}>
        <h2 class="my-h2">{subHeading}</h2> {/* Sub heading text */}
        <p>{bodyText1}</p> {/* Body text for sub heading */}
        <p>{bodyText2}</p> {/* Body text for sub heading */}
      </Col>
    </Row>
  );
}

const AboutPage = () => {
  const artistTranslationArray = [
    "about.artistSection1",
    "about.artistSection2",
    "about.artistSection3",
  ];
  const coderTranslationArray = [
    "about.coderSection1",
    "about.coderSection2",
    "about.coderSection3",
  ];
  const bardTranslationArray = ["about.bardSection"];

  const artistTranslations = artistTranslationArray.map((key) => t(key));
  const bardTranslations = bardTranslationArray.map((key) => t(key)); // Translate each key
  const coderTranslations = coderTranslationArray.map((key) => t(key));

  const artistURL =
    "https://cdn.discordapp.com/attachments/778680833153564693/1252456137639333918/rsh175m.png?ex=667593ec&is=6674426c&hm=27208a7bcfeea26e79871dbde004e6310f79a75e5f568bb75d7d359eea29714c&";

  const codersURL =
    "https://cdn.discordapp.com/attachments/778680833153564693/1252456137857564743/rsh175m.png?ex=667593ec&is=6674426c&hm=dfdad42aa8dd34fec717d216dd6849c150048381c120e7a9e5fad98ff762dd06&";
  const bardURL =
    "https://cdn.discordapp.com/attachments/778680833153564693/1252456138050506852/rsh175m.png?ex=667593ec&is=6674426c&hm=91d15a5eae74101177eb2abb20c47405d61aa61f217f04c272df0c6b9442ae5a&";
  const logoURL =
    "https://img1.wsimg.com/isteam/ip/b4d39968-ce34-4e68-ac72-ba40d4530675/Babel%20Armada%20GeoNova%20Icon.png/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600";

  return (
    <div className="main-content p-5">
      <Container className="p-5">
        <Container className=" p-5 main-content">
          <h1 className="header">{t("about.title")}</h1>
          <hr />
          <ImageTextSection
            imageUrl={logoURL}
            subHeading={t("about.subtitle")}
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
          />
          <PageSection
            sectionName={"Coders"}
            srcURL={codersURL}
            translatedArray={coderTranslations}
          />
          <PageSection
            sectionName={"Bard"}
            srcURL={bardURL}
            translatedArray={bardTranslations}
          />
        </Container>
      </Container>
    </div>
  );
};

export default AboutPage;
