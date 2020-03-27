import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://storage.needpix.com/rsynced_images/employees-1704059_1280.jpg">
        <h2>Employee Roster</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>An easy to use GUI for viewing employee information</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This simple application enables you to easily view the employee roster. Click the search tab to begin.
            </p>
            <p>
Created using React with a Sequelize backend, this is a demo of a basic interactive application.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
