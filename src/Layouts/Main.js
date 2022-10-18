import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h2>right nav</h2>
          </Col>
          <Col>
            <Outlet />
          </Col>
          <Col>
            <h2>Left nav</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
