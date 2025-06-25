import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitness from "../../Assets/Projects/firness.png";
import course from "../../Assets/Projects/course.png";
import task from "../../Assets/Projects/task.png";
import PerfectFit from "../../Assets/Projects/PerfectFit.png";
import sign from "../../Assets/Projects/sign.png";
import smartTrafic from "../../Assets/Projects/smartTrafic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PerfectFit}
              isBlog={false}
              title="PerfectFit-AI"
              description="AI-powered Online Tailoring Platform that captures accurate body measurements through photos or live camera input. Built using Next.js, Flask, TensorFlow, and Firebase, it allows users to personalize their style, select size and clothing preferences, and either buy or rent custom-fit clothes. Features include real-time AI measurement, image upload, live camera support, and dual clothing options — all designed to offer the perfect fit from anywhere."
              ghLink="https://github.com/amanantuley/PerfectFit-AI"
              demoLink="https://perfectfit-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartTrafic}
              isBlog={false}
              title="Smart Traffic Management System"
              description=" Smart Traffic Signal System uses real-time sensor and camera data to dynamically control traffic lights, reduce congestion, and prioritize emergency vehicles using AI and IoT. It adapts signal timing based on vehicle density, ensures smooth traffic flow, and enhances road safety. The system also features a dashboard for monitoring and can be integrated with city-wide smart infrastructure."
              ghLink="https://github.com/amanantuley/Smart_Traffic_Signal"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="AI-Powered Task Optimization System"
              description="AI-Powered Task Optimization is an intelligent system that analyzes user behavior, detects stress levels, and recommends personalized tasks in real time. It leverages NLP, emotion detection, and productivity analytics to enhance focus, reduce overload, and boost team efficiency.
The system adapts dynamically to user mood and workload, providing timely task suggestions. It also offers team-wide insights to help managers balance productivity and well-being."
              ghLink="https://github.com/amanantuley/AI-Powered-Task_Optimization"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Personal Fitness Tracker"
              description="Personal Fitness Tracker is a smart wellness application that helps users monitor their daily activity, track health metrics like heart rate and calories, and maintain fitness goals. It uses sensor data and visual analytics to provide real-time insights on workouts, nutrition, and sleep quality — all in one intuitive dashboard.
The system adapts to user behavior, offering personalized fitness recommendations. Progress can be visualized through charts and shared with trainers or healthcare providers."
              ghLink="https://github.com/amanantuley/Personal_Fitness_Tracker"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sign}
              isBlog={false}
              title="Sign Language Detection"
              description=" Sign Language Detection is an AI-based system that recognizes hand gestures in real time to interpret sign language. It uses computer vision and machine learning to bridge communication gaps between hearing and non-hearing individuals.
The system captures hand movements through a camera, processes them using models trained on ASL datasets, and translates them into readable text or speech.
It can be integrated into chat tools, learning platforms, or accessibility software to promote inclusivity and empower better communication in classrooms, customer service, and healthcare."
              ghLink="https://github.com/amanantuley/Edunet_Project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="Course Recommendation System"
              description="Course Recommendation System is an intelligent platform that suggests personalized learning paths based on user interests, past activity, and skill levels. Using machine learning and user profiling, it helps learners discover relevant courses quickly and effectively.
The system analyzes behavior, preferences, and trends to improve recommendations over time, enhancing user engagement and boosting course completion rates.
It can be integrated with e-learning platforms to provide real-time suggestions. Administrators can also track popular courses and learner progress through insightful analytics."
              ghLink="https://github.com/amanantuley/Course_Recommendation_System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
