import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import TableProduct from "./TableProduct";

const Product = () => {
  return (
    <Router>
      <Container fluid>
        <Nav variant="tabs" defaultActiveKey="/product">
          <Nav.Item>
            <LinkContainer exact to="/product">
              <Nav.Link>Product</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer exact to="/product/add">
              <Nav.Link>Add Product</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/product" component={TableProduct} />
          <Route exact path="/product/add" component={AddProduct} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Product;
