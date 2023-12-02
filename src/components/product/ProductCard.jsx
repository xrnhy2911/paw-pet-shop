import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ProductModal from "../modal/ProductModal";
import ProductDetail from "../product-detail/ProductDetail";
import image1 from "../../img/munchkin_cat.jpg";
import image2 from "../../img/birman_1.jpg";
import image3 from "../../img/persian_1.jpg";
import image4 from "../../img/ragdoll_1.jpg";
import image5 from "../../img/ragdoll_2.jpg";
import image6 from "../../img/ragdoll_3.jpg";
import image7 from "../../img/bonludan.jpeg";
import image8 from "../../img/bat.jpg";
import image9 from "../../img/snappy.jpg";
import image10 from "../../img/thapbongbong.jpg";
import image11 from "../../img/vong.jpeg";


import "./productCard.css";

import SearchBar from "../search-bar/SearchBar";

const productDataList = [
  {
    title: "Munchkin Cat",
    price: "20,000,000",
    image: image1,
    productId: "1",
  },
  {
    title: "Birman Cat",
    price: "25,000,000",
    image: image2,
    productId: "2",
  },
  {
    title: "Persian Cat",
    price: "30,000,000",
    image: image3,
    productId: "3",
  },
  {
    title: "Ragdoll Cat",
    price: "35,000,000",
    image: image4,
    productId: "4",
  },
  {
    title: "Ragdoll Cat 2",
    price: "40,000,000",
    image: image5,
    productId: "5",
  },
  {
    title: "Ragdoll Cat 3",
    price: "45,000,000",
    image: image6,
    productId: "6",
  },
  {
    title: "Cat Litter Box",
    price: "345,000",
    image: image7,
    productId: "7",
  },
  {
    title: "Tilted Cat Bowl",
    price: "15,000",
    image: image8,
    productId: "8",
  },
  {
    title: "Pate Snappy Tom",
    price: "15,000",
    image: image9,
    productId: "9",
  },
  {
    title: "Cat Toys",
    price: "50,000",
    image: image10,
    productId: "10",
  },
  {
    title: "Cat Bed Pet Hammock",
    price: "180,000",
    image: image11,
    productId: "11",
  },
];

export default function ProductCard() {
  const [modalShow, setModalShow] = useState({
    show: false,
    productData: null,
  });
  const images = [image1, image2, image3, image4, image5, image6];

  const handleShowModal = (productData) => {
    setModalShow({ show: true, productData: productData });
  };

  const handleCloseModal = () => {
    setModalShow({ show: false, productData: null });
  };

  const selectedProduct = modalShow.productData;
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
        onSelectProduct={(productData) =>
          setModalShow({ show: false, productData })
        }
      />

      {selectedProduct && <ProductDetail productDetails={selectedProduct} />}
    </>
  );
}
