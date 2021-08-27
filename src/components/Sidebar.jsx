import React from "react";
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
      <Nav
        defaultActiveKey="/home"
        as="ul"
        className="flex-column w-25"
        variant="pills"
      >
        <Nav.Item as="li" className="align-self-center bg-transparent">
          <Nav.Link href="">
            <img src={logonukang} alt="logo nukang" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/home" className="d-flex align-items-center ">
            <h3 className="mr-2">
              <FaHome />
            </h3>
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-1" className="d-flex align-items-center">
            <h3 className="mr-2">
              <FaClipboardList />
            </h3>
            Orders
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-2" className="d-flex align-items-center ">
            <h3 className="mr-2">
              <FaBullhorn />
            </h3>
            Marketing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-2" className="d-flex align-items-center ">
            <h3 className="mr-2">
              <FaStar />
            </h3>
            Rates
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="link-2" className="d-flex align-items-center ">
            <h3 className="mr-2">
              <FaFileAlt />
            </h3>
            Reports
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
