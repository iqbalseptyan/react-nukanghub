import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import AllOrder from "./AllOrder";
import Process from "./Process";
import CompleteOrder from "./CompleteOrder";
import HoldOrder from "./HoldOrder";
import CancelOrder from "./CancelOrder";

const Order = () => {
  return (
    <Router>
      <h1>Order</h1>
      <Row>
        <Col>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <LinkContainer exact to="/order/all">
                <Nav.Link>Semua (9)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/process">
                <Nav.Link>Proses (1)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/complete">
                <Nav.Link>Selesai (6)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/hold">
                <Nav.Link>Tahan (1)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/cancel">
                <Nav.Link>Batal (1)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Switch>
            <Route exact path="/order/all">
              <AllOrder />
            </Route>
            <Route path="/order/process" component={Process} />
            <Route path="/order/complete" component={CompleteOrder} />
            <Route path="/order/hold" component={HoldOrder} />
            <Route path="/order/cancel" component={CancelOrder} />
          </Switch>
        </Col>
        <Col md="4">
          <h3>Tindakan</h3>
        </Col>
      </Row>
    </Router>
  );
};

export default Order;
