import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ProductModal from "../modal/ProductModal";
import { productDataList } from "../../data/data";
import "./productCard.css";

import SearchBar from "../search-bar/SearchBar";
export default function ProductCard() {
  const [modalShow, setModalShow] = useState({
    show: false,
    productData: null,
  });

  const handleShowModal = (productData) => {
    setModalShow({ show: true, productData: productData });
  };

  const handleCloseModal = () => {
    setModalShow({ show: false, productData: null });
  };
  return (
    <>
      <Container className="py-2">
        <h1 className="m-4">Our Products</h1>
        <SearchBar />
        <Row xs={1} md={3} className="g-4 m-4">
          {productDataList.map((productData, idx) => (
            <Col key={idx} className="mb-4">
              <Card className="h-100 shadow ">
                <Card.Img
                  variant="top"
                  src={productData.image}
                  style={{ maxHeight: "355px" }}
                  className="custom-product-image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mt-auto">
                    <span className="h3 mt-auto">{productData.title}</span>
                  </Card.Title>
                  <Card.Title>Price: {productData.price}</Card.Title>
                  <button
                    id="custom-button"
                    className="mx-auto shadow"
                    onClick={() => handleShowModal(productData)}
                  >
                    Preview
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ProductModal
        show={modalShow.show}
        onHide={handleCloseModal}
        productData={modalShow.productData}
        // onSelectProduct={(productData) =>
        //   setModalShow({ show: false, productData })
        // }
      />

      {/* {selectedProduct && <ProductDetail productDetails={selectedProduct} />} */}
    </>
  );
}
