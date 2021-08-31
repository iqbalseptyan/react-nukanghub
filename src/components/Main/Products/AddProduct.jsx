import { Button, Col, Form, Row } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = () => {
  return (
    <Row>
      <Col lg="8">
        <Form.Group controlId="formNamaProduk">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control type="text" placeholder="Nama produk" />
        </Form.Group>

        <div style={{ maxWidth: "800px" }}>
          <Form.Label>Deskripsi Produk</Form.Label>
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

        <Form.Group controlId="formNamaProduk">
          <Form.Label>Gambar Produk</Form.Label>
          <Form.Control type="file" placeholder="Nama produk" />
        </Form.Group>
      </Col>

      <Col lg="4">
        <Form.Group controlId="formHarga">
          <Form.Label>Harga</Form.Label>
          <Form.Control type="number" placeholder="Harga" />
        </Form.Group>

        <Form.Group controlId="formHargaJual">
          <Form.Label>Harga Jual</Form.Label>
          <Form.Control type="number" placeholder="Harga jual" />
        </Form.Group>

        <Form.Group controlId="formProdukStok">
          <Form.Label>Produk Stok</Form.Label>
          <Form.Control type="number" placeholder="Produk stok" />
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
        <Button variant="outline-primary">Publish Produk</Button>
      </Col>
    </Row>
  );
};

export default AddProduct;
