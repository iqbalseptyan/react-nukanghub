import React from "react";
import { Table } from "react-bootstrap";

const TableKonsultan = () => {
  return (
    <Table responsive striped bordered hover size="lg">
      <thead>
        <tr>
          <th>#</th>
          <th>Produk</th>
          <th>Nama</th>
          <th>Stock</th>
          <th>Harga</th>
          <th>Kategori</th>
          <th>Tanggal Publish</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://picsum.photos/200"
              alt="Generic placeholder"
            />
          </td>
          <td>Batako Putih</td>
          <td>In Stock (10.000)</td>
          <td>Rp.2500</td>
          <td>Batak o, Malang</td>
          <td>Published 2021/03/10 at 10:55 pm</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://picsum.photos/200"
              alt="Generic placeholder"
            />
          </td>
          <td>Batako Putih</td>
          <td>In Stock (10.000)</td>
          <td>Rp.2500</td>
          <td>Batak o, Malang</td>
          <td>Published 2021/03/10 at 10:55 pm</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableKonsultan;
