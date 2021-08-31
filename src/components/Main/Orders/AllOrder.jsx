import React from "react";
import { FormControl, InputGroup, Table } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const AllOrder = () => {
  return (
    <>
      <h1>All Order</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Pesanan</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Total</th>
            <th>Hubungi Buyer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#200 Orlan Nguru</td>
            <td>27 April 2021</td>
            <td>Proses</td>
            <td>Rp7,500.000</td>
            <td>
              <FaWhatsapp />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#200 Orlan Nguru</td>
            <td>27 April 2021</td>
            <td>Tahan</td>
            <td>Rp7,500.000</td>
            <td>
              <FaWhatsapp />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#200 Orlan Nguru</td>
            <td>27 April 2021</td>
            <td>Selesai</td>
            <td>Rp7,500.000</td>
            <td>
              <FaWhatsapp />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AllOrder;
