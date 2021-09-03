import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import TableTukang from "./TableTukang";
import AddTukang from "./AddTukang";

const Tukang = () => {
  return (
    <Container fluid>
      <Nav variant="tabs" defaultActiveKey="/tukang">
        <Nav.Item>
          <LinkContainer exact to="/tukang">
            <Nav.Link>Tukang</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/tukang/add">
            <Nav.Link>Add Tukang</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path="/tukang" component={TableTukang} />
        <Route path="/tukang/add" component={AddTukang} />
      </Switch>
    </Container>
  );
};

export default Tukang;
