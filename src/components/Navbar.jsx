import React from "react";
import "./styles.css";
import { Badge, Button, Form, FormControl, Image, Nav } from "react-bootstrap";
import { BsBell } from "react-icons/bs";

const NavbarComponent = (props) => {
  return (
    <Nav>
      <div className="d-none d-lg-flex">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>

      <Nav.Item className="align-self-center mr-sm-2 ">
        <Nav.Link eventKey="link-2">
          <BsBell size="28px" />
          <Badge variant="light" className="position-absolute ">
            9
          </Badge>
          <span className="sr-only">unread messages</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="align-self-center ">
        <Nav.Link eventKey="disabled" disabled>
          <Image
            src="https://picsum.photos/200"
            style={{
              backgroundColor: "black",
              borderRadius: "10px 0 10px 0",
            }}
            className="img-fluid"
            width={48}
            height={48}
          />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavbarComponent;
