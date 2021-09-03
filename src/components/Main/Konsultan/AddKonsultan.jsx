import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddKonsultan = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Row>
      <Col lg="8">
        <Form.Group controlId="formNamaKonsultan">
          <Form.Label>Nama Konsultan</Form.Label>
          <Form.Control type="text" placeholder="Nama Konsultan" />
        </Form.Group>

        <div style={{ maxWidth: "800px" }}>
          <Form.Label>Deskripsi Konsultan</Form.Label>
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

        <Form.Group controlId="formNamaKonsultan">
          <Form.Label>Gambar Konsultan</Form.Label>
          <Form.Control type="file" placeholder="Nama Konsultan" />
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

        <Form.Group controlId="formKonsultanStok">
          <Form.Label>Konsultan Stok</Form.Label>
          <Form.Control type="number" placeholder="Konsultan stok" />
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
        <Button variant="outline-primary">Publish Konsultan</Button>
      </Col>
    </Row>
  );
};

export default AddKonsultan;
