import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  Nav,
  Row,
  Table,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import AllOrder from "./AllOrder";
import Process from "./Process";
import CompleteOrder from "./CompleteOrder";
import HoldOrder from "./HoldOrder";
import CancelOrder from "./CancelOrder";

const Order = () => {
  return (
    <Router>
      <h1>Order</h1>
      <Row>
        <Col lg="8">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <LinkContainer exact to="/order">
                <Nav.Link>Semua (9)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/process">
                <Nav.Link>Proses (1)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/complete">
                <Nav.Link>Selesai (6)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/hold">
                <Nav.Link>Tahan (1)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer exact to="/order/cancel">
                <Nav.Link>Batal (1)</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Switch>
            <Route exact path="/order" component={AllOrder} />
            <Route path="/order/process" component={Process} />
            <Route path="/order/complete" component={CompleteOrder} />
            <Route path="/order/hold" component={HoldOrder} />
            <Route path="/order/cancel" component={CancelOrder} />
          </Switch>
        </Col>
        <Col lg="4">
          <h3>Tindakan</h3>

          <ListGroup style={{ height: "30vh", overflowY: "scroll" }}>
            <ListGroup.Item>
              <h5>Detail nomor Pesanan #200</h5>
              <span className="text-black-50">
                Pembayaran via Transfer Bank BNI <br />
                Dibayar pada April 27, 2021 jam 10:29am.
                <br />
                User: Orlan Nguru
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Umum</h5>
              <span className="text-black-50">
                Tanggal dibuat : <br />
                Selasa, 27 April 2021 @ 10:30
                <br />
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Status</h5>
              <Form.Control as="select">
                <option value="1">Hapus</option>
                <option value="2">Telah Selesai</option>
                <option value="3">Proses</option>
                <option value="4">Ditahan</option>
                <option value="5">Batal</option>
              </Form.Control>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Penagihan</h5>
              <span className="text-black-50">
                Orlan Nguru <br />
                Cipondoh Makmur, Tanggerang City, Banten, Indonesia 15148.
                <br />
                Email : orlannguru@gmail.com No Telp : 0812-3693-7200
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Pengiriman</h5>
              <span className="text-black-50">
                Orlan Nguru <br />
                SPI No. 3A, Sukun, Kota Malang Indonesia a.n Iwan Hadi
                <br />
                <strong>Catatan yang Diberikan Pelanggan:</strong>
                Di antar sebelum tanggal 29 ya pak
              </span>
            </ListGroup.Item>
          </ListGroup>
          <Card className="mt-2">
            <Card.Body>
              <h5>Produk</h5>
              <Table size="sm">
                <thead>
                  <tr>
                    <th>Gambar</th>
                    <th>Detail</th>
                    <th>Jumlah</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://picsum.photos/200"
                        alt="Generic placeholder"
                      />
                    </td>
                    <td>
                      <strong>Pasir Lumajang</strong> <br />
                      <small>Biaya</small>
                      <br />
                      <strong>Rp. 750.000</strong>
                    </td>
                    <td>10</td>
                    <td>Rp. 7.500.000</td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      Subtotal item : Rp. 7.500.000 <br />
                      Total pesanan : Rp. 7.500.000
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-center">
                <Button variant="outline-primary" size="sm" className="mr-3">
                  Simpan
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Cetak
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Router>
  );
};

export default Order;
