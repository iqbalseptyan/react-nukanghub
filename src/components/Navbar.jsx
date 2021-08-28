import React from "react";
import { Badge, Button, Form, FormControl, Image, Nav } from "react-bootstrap";
import { BsBell } from "react-icons/bs";

const NavbarComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-content-center w-100">
        <h2 className=" d-none d-lg-block w-100 align-self-center">
          Welcome, Iwan Hi
        </h2>
        <Nav className="justify-content-end w-100" activeKey="/home">
          <Form inline className="d-none d-lg-block align-self-center ">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
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
                  maxHeight: "50px",
                  maxWidth: "50px",
                }}
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/* <Nav className="justify-content-end " activeKey="/home">
        <Form inline className="d-none d-lg-block align-self-center ">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
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
                maxHeight: "50px",
                maxWidth: "50px",
              }}
            />
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      {/* <Nav activeKey="/home" className="justify-content-end"> */}
      {/* <div className="justify-content-between flex-row">
          <div>1123123123</div>
          <div>2123123131</div>
        </div> */}
      {/* <div className="align-self-center text-primary d-none d-lg-block">
          <h2>Welcome, Iwan Hi </h2>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Form inline className="d-none d-lg-block">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
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
                  maxHeight: "50px",
                  maxWidth: "50px",
                }}
              />
            </Nav.Link>
          </Nav.Item>
        </div> */}
      {/* </Nav> */}
    </>
  );
};

export default NavbarComponent;
