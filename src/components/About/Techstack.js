import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiC, SiR, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { SiCss3 } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <SiC />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiHtml5 />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiR />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiMysql />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiCss3 />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <DiReact />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiMongodb />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <DiGit />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiFirebase />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiTailwindcss />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <DiPython />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiJava />
</Col>

    </Row>
  );
}

export default Techstack;
