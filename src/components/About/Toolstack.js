import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiWindows } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiJupyter } from "react-icons/si";


import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <SiLinux />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiWindows />
</Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiDocker />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <FaGithub />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiJupyter />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiIntellijidea />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiFigma />
</Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
