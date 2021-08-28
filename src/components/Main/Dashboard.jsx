import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Row>
        <Col md="auto">
          <Card
            className=""
            style={{
              borderRadius: "20px 0 20px 0",
              backgroundColor: "#FFCA10",
            }}
          >
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card
            className=""
            style={{
              borderRadius: "20px 0 20px 0",
              backgroundColor: "#FFCA10",
            }}
          >
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
        <Col>
          <div className="d-flex justify-content-between">
            <h5>Top selling product</h5>
            <a href="asd">
              See all
              <MdKeyboardArrowRight />
            </a>
          </div>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
