import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import Order from "./components/Main/Orders/Order";
import Product from "./components/Main/Products/Product";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NoMatch from "./components/NoMatch";
import Tukang from "./components/Main/Tukang/Tukang";
import Konsultan from "./components/Main/Konsultan/Konsultan";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="d-flex"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Sidebar toggle={toggle} />
      <div className={`main__content ${toggle ? "active" : ""}`}>
        {/* Navbar */}
        <Container
          fluid
          className="d-flex justify-content-between "
          style={{ height: "80px" }}
        >
          <div className="d-flex align-items-center">
            <FaBars
              style={{ cursor: "pointer", marginRight: "5px" }}
              onClick={() => setToggle(!toggle)}
            />
            <h2 className="d-none d-lg-flex">Welcome, Iwan Hi</h2>
          </div>
          <NavbarComponent />
        </Container>

        <div
          style={{
            height: "calc(100% - 80px)",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/order" component={Order} />
            <Route path="/product" component={Product} />
            <Route path="/tukang" component={Tukang} />
            <Route path="/konsultan" component={Konsultan} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
