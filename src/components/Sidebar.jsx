import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import {
  FaBullhorn,
  FaClipboardList,
  FaFileAlt,
  FaHome,
  FaStar,
  FaTshirt,
} from "react-icons/fa";
import logonukang from "../images/logo.png";

const Sidebar = () => {
  return (
    <>
      <Nav as="ul" className="flex-column col-lg-12" variant="pills">
        <Nav.Item as="li" className="align-self-center mb-2">
          <img src={logonukang} alt="logo nukang" className="img-fluid" />
        </Nav.Item>
        <Nav.Item as="li" className="w-100 align-items-center">
          <LinkContainer exact to="/">
            <Nav.Link>
              <FaHome size="36px" />
              <span className="ml-2">Dashboard</span>
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer exact to="/order">
            <Nav.Link href="link-1">
              <FaClipboardList size="36px" />
              <span className="ml-2">Orders</span>
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer exact to="/product">
            <Nav.Link href="link-2">
              <FaTshirt size="36px" />
              <span className="ml-2">Products</span>
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-2">
            <FaBullhorn size="36px" />
            <span className="ml-2">Marketing</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-2">
            <FaStar size="36px" />
            <span className="ml-2">Rates</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-2">
            <FaFileAlt size="36px" />
            <span className="ml-2">Reports</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
