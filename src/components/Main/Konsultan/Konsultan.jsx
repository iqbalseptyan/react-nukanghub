import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import TableKonsultan from "./TableKonsultan";
import AddKonsultan from "./AddKonsultan";

const Konsultan = () => {
  return (
    <Container fluid>
      <Nav variant="tabs" defaultActiveKey="/konsultan">
        <Nav.Item>
          <LinkContainer exact to="/konsultan">
            <Nav.Link>Konsultan</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/konsultan/add">
            <Nav.Link>Add Konsultan</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path="/konsultan" component={TableKonsultan} />
        <Route path="/konsultan/add" component={AddKonsultan} />
      </Switch>
    </Container>
  );
};

export default Konsultan;
