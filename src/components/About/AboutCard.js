import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Hello Everyone, I’m <span className="purple">Aman Antuley</span> from <span className="purple">Mumbai, India</span>.
  <br />
  I’m currently pursuing a degree in <strong>Computer Engineering</strong>.
  <br />
  <br />
  <br />
  Apart from coding, I’m passionate about exploring new technologies, solving problems, and staying active in the developer community.
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You don’t need to be perfect — just consistent."{" "}
          </p>
          <footer className="blockquote-footer">Aman Antuley</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
