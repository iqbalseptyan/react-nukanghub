import React from "react";
import { Badge, Card, Col, Container, Media, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="8">
          <Row className="justify-content-center ">
            <Col sm="auto" md="5" className="d-flex  align-items-stretch">
              <Card
                style={{
                  borderRadius: "20px 0 20px 0",
                  backgroundColor: "#FFCA10",
                }}
              >
                <Card.Body className="d-flex align-items-center ">
                  <Media>
                    <img
                      width={64}
                      height={64}
                      className="mr-3 "
                      src="https://picsum.photos/200"
                      alt="Generic placeholder"
                      style={{ borderRadius: "10px 0 10px 0" }}
                    />
                    <Media.Body>
                      <Row>
                        <Col sm="auto" md="7">
                          <h5>2000</h5>
                        </Col>
                        <Col sm="auto" md="3">
                          <Badge variant="primary">+20</Badge>
                        </Col>
                        <Col md="12">
                          <p>Orders</p>
                        </Col>
                      </Row>
                    </Media.Body>
                  </Media>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="auto" md="7" className="d-flex align-items-stretch">
              <Card
                className="m-auto"
                style={{
                  borderRadius: "0 20px 0 20px",
                  backgroundColor: "#FCECB4",
                }}
              >
                <Card.Body className="d-flex align-items-center ">
                  <Media>
                    <img
                      width={64}
                      height={64}
                      className="mr-3 "
                      src="https://picsum.photos/200"
                      alt="Generic placeholder"
                      style={{ borderRadius: "10px 0 10px 0" }}
                    />
                    <Media.Body>
                      <Row>
                        <Col sm="auto" md="7">
                          <h5>Rp 2.000.000</h5>
                        </Col>
                        <Col sm="auto" md="5">
                          <Badge variant="primary">+Rp.840.000</Badge>
                        </Col>
                        <Col md="12">
                          <p>Profit</p>
                        </Col>
                      </Row>
                    </Media.Body>
                  </Media>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Col>
            <LineChart />
          </Col>
        </Col>

        <Col md="4">
          <div className="d-flex justify-content-between mb-3">
            <h5>Top selling product</h5>
            <LinkContainer exact to="/all">
              <a href="/product/all">
                See all
                <MdKeyboardArrowRight />
              </a>
            </LinkContainer>
          </div>
          <ul className="list-unstyled">
            <Media as="li">
              <strong className="align-self-center mr-3">1</strong>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://picsum.photos/200"
                alt="Generic placeholder"
                style={{ borderRadius: "10px 0 10px 0" }}
              />
              <Media.Body>
                <h5>Batako Putih</h5>
                <p>Rp. 2000</p>
              </Media.Body>
            </Media>
            <Media as="li">
              <strong className="align-self-center mr-3">2</strong>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://picsum.photos/200"
                alt="Generic placeholder"
                style={{ borderRadius: "10px 0 10px 0" }}
              />
              <Media.Body>
                <h5>Pasir Lumajang</h5>
                <p>Rp. 750.000</p>
              </Media.Body>
            </Media>
            <Media as="li">
              <strong className="align-self-center mr-3">3</strong>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://picsum.photos/200"
                alt="Generic placeholder"
                style={{ borderRadius: "10px 0 10px 0" }}
              />
              <Media.Body>
                <h5>Pasir Urugan</h5>
                <p>Rp. 450.000</p>
              </Media.Body>
            </Media>
            <Media as="li">
              <strong className="align-self-center mr-3">4</strong>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://picsum.photos/200"
                alt="Generic placeholder"
                style={{ borderRadius: "10px 0 10px 0" }}
              />
              <Media.Body>
                <h5>Pasir Hitam Pakis</h5>
                <p>Rp. 600.000</p>
              </Media.Body>
            </Media>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
