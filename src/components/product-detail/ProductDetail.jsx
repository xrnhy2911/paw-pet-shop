import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function ProductDetail() {
  const { productId } = useParams(); // Access the productId from the URL parameters

  // Fetch product details based on productId, you can use your data fetching logic here

  const productDetails = {
    title: "Product Title",
    price: "20,000,000",
    productId: productId,
    image: "path/to/image",
  };

  if (!productDetails) {
    return <div>Loading...</div>; // Add loading UI or handle the case when data is not available
  }
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6}>
          <Image src={productDetails.image} alt={productDetails.title} fluid />
        </Col>
        <Col xs={12} md={6}>
          <h2>{productDetails.title}</h2>
          <h3>Price: {productDetails.price}</h3>
          <p className="mt-2">Mã Sản phẩm: {productDetails.productId}</p>
          <Button
            id="buy-now-button"
            className="mt-2"
            style={{ width: "100%" }}
            onClick={() => console.log("Buy Now clicked")}
          >
            Mua ngay
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
