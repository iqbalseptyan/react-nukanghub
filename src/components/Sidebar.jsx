import React from "react";
import "./styles.css";
import { Image, Nav } from "react-bootstrap";
import {
  FaBullhorn,
  FaClipboardList,
  FaFileAlt,
  FaHome,
  FaSignOutAlt,
  FaStar,
  FaTshirt,
} from "react-icons/fa";
import logonukang from "../images/logo.png";
import { LinkContainer } from "react-router-bootstrap";

const Sidebar = (props) => {
  return (
    <div className={`sidebar  p-2 ${props.toggle ? "active" : ""}`}>
      <div style={{ height: "80px" }} className=" d-flex align-items-center ">
        <Image src={logonukang} className="img-fluid " />
      </div>

      <Nav variant="pills" as="ul" className="flex-column ">
        <div className="w-100">
          <Nav.Item as="li">
            <LinkContainer to="/home">
              <Nav.Link className={`${props.toggle ? "" : "flex-column"}`}>
                <FaHome size={36} />
                {props.toggle ? (
                  <span className="ml-3"> Dashboard</span>
                ) : (
                  <small> Dashboard</small>
                )}
              </Nav.Link>
            </LinkContainer>
            {/* <span className="tooltip">Dashboard</span> */}
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer to="/order">
              <Nav.Link className={`${props.toggle ? "" : "flex-column"}`}>
                <FaClipboardList size={36} />
                {props.toggle ? (
                  <span className="ml-3"> Orders</span>
                ) : (
                  <small> Orders</small>
                )}
              </Nav.Link>
            </LinkContainer>
            {/* <span className="tooltip">Orders</span> */}
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer to="/product">
              <Nav.Link className={`${props.toggle ? "" : "flex-column"}`}>
                <FaTshirt size={36} />
                {props.toggle ? (
                  <span className="ml-3">Products</span>
                ) : (
                  <small>Products</small>
                )}
              </Nav.Link>
            </LinkContainer>
            {/* <span className="tooltip">Products</span> */}
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer to="/marketing">
              <Nav.Link className={`${props.toggle ? "" : "flex-column"}`}>
                <FaBullhorn size={36} />
                {props.toggle ? (
                  <span className="ml-3">Marketing</span>
                ) : (
                  <small>Marketing</small>
                )}
              </Nav.Link>
            </LinkContainer>
            {/* <span className="tooltip">Marketing</span> */}
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer to="/rates">
              <Nav.Link className={`${props.toggle ? "" : "flex-column"}`}>
                <FaStar size={36} />
                {props.toggle ? (
                  <span className="ml-3">Rates</span>
                ) : (
                  <small>Rates</small>
                )}
              </Nav.Link>
            </LinkContainer>
            {/* <span className="tooltip">Rates</span> */}
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer to="/report">
              <Nav.Link className={`${props.toggle ? "" : "flex-column"}`}>
                <FaFileAlt size={36} />
                {props.toggle ? (
                  <span className="ml-3">Reports</span>
                ) : (
                  <small>Reports</small>
                )}
              </Nav.Link>
            </LinkContainer>
            {/* <span className="tooltip">Reports</span> */}
          </Nav.Item>
        </div>
        {/* <div className="w-100 fixed-bottom"> */}
        <Nav.Item
          className="position-absolute "
          style={{ bottom: "0", left: "5px" }}
        >
          <LinkContainer to="/logout">
            <Nav.Link
              className={`${props.toggle ? "" : "d-flex  flex-column"}`}
            >
              <FaSignOutAlt size={36} />
              {props.toggle ? (
                <span className="ml-3">Logout</span>
              ) : (
                <small>Logout</small>
              )}
            </Nav.Link>
          </LinkContainer>
          {/* <span className="tooltip">Logout</span> */}
        </Nav.Item>
        {/* </div> */}
      </Nav>
    </div>
  );
};

export default Sidebar;
