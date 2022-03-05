import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChartWrapper from "./ChartWrapper";
import GenderDropdown from "./GenderDropdown";

const App = () => {
  const [gender, setGender] = useState("man");

  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Barchartly</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12}>
            <GenderDropdown genderSelected={setGender} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ChartWrapper gender={gender} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
