import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Accordion, Button, Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import Order from "./components/Main/Orders/Order";
import Product from "./components/Main/Product";
import { FaBars } from "react-icons/fa";

function App() {
  return (
    <Router>
      <Container fluid className="text-primary">
        <Accordion defaultActiveKey="0">
          <div className="d-flex">
            <div>
              <Accordion.Collapse eventKey="0">
                <Sidebar />
              </Accordion.Collapse>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  // className="d-md-block d-lg-none"
                >
                  <FaBars />
                </Accordion.Toggle>
                <NavbarComponent />
              </div>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/product" component={Product} />
              </Switch>
            </div>
          </div>
        </Accordion>
      </Container>
    </Router>
  );
}

export default App;
