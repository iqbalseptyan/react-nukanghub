// import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import AddProduct from "./AddProduct";
import TableProduct from "./TableProduct";

const Product = () => {
  const [key, setKey] = useState("product");
  return (
    <>
      <h1>Product</h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="product" title="Product">
          <TableProduct />
        </Tab>
        <Tab eventKey="profile" title="Add Product">
          <AddProduct />
        </Tab>
      </Tabs>
    </>
  );
};

export default Product;
