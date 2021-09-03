import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddTukang = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Row>
      <Col lg="8">
        <Form.Group controlId="formNamaTukang">
          <Form.Label>Nama Tukang</Form.Label>
          <Form.Control type="text" placeholder="Nama Tukang" />
        </Form.Group>

        <div style={{ maxWidth: "800px" }}>
          <Form.Label>Deskripsi Tukang</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data=""
            config={{
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "blockQuote",
                "link",
                "numberedList",
                "bulletedList",
                "insertTable",
                "tableColumn",
                "tableRow",
                "mergeTableCells",
                "mediaEmbed",
                "|",
                "undo",
                "redo",
              ],
            }}
          />
        </div>

        <Form.Group controlId="formNamaTukang">
          <Form.Label>Gambar Tukang</Form.Label>
          <Form.Control type="file" placeholder="Nama Tukang" />
        </Form.Group>
      </Col>

      <Col lg="4">
        <Form.Group controlId="formHarga">
          <Form.Check
            type="checkbox"
            id="defaultCheckBox"
            label="Harga"
            onChange={() => setIsChecked((isChecked) => !isChecked)}
          />
          {isChecked ? (
            <Form.Control type="number" placeholder="Harga" />
          ) : (
            <Form.Control value="Free" placeholder="Harga" disabled />
          )}
        </Form.Group>

        <Form.Group controlId="formHargaJual">
          <Form.Label>Harga Jual</Form.Label>
          <Form.Control type="number" placeholder="Harga jual" />
        </Form.Group>

        <Form.Group controlId="formTukangStok">
          <Form.Label>Tukang Stok</Form.Label>
          <Form.Control type="number" placeholder="Tukang stok" />
        </Form.Group>

        <Form.Group controlId="formKategori">
          <Form.Label>Kategori</Form.Label>
          <Form.Control as="select">
            <option>Pilih Kategori</option>
            <option>Batako</option>
            <option>Batu</option>
            <option>Pasir</option>
            <option>Furnitur</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formLokasi">
          <Form.Label>Lokasi</Form.Label>
          <Form.Control as="select">
            <option>Pilih Lokasi</option>
            <option>Malang</option>
            <option>Blitar</option>
            <option>Tulungagung</option>
            <option>Kediri</option>
          </Form.Control>
        </Form.Group>
        <Button variant="outline-primary">Publish Tukang</Button>
      </Col>
    </Row>
  );
};

export default AddTukang;
