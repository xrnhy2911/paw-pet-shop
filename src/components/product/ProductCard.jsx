import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import image1 from "../../img/munchkin_cat.jpg";
import image2 from "../../img/birman_1.jpg";
import image3 from "../../img/persian_1.jpg";
import image4 from "../../img/ragdoll_1.jpg";
import image5 from "../../img/ragdoll_2.jpg";
import image6 from "../../img/ragdoll_3.jpg";

import SearchBar from "../search-bar/SearchBar";

export default function ProductCard() {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <>
      <Container className="py-2">
        <h1 className="m-4">Our Products</h1>
        <SearchBar />
        <Row xs={1} md={3} className="g-4 m-4">
          {images.map((image, idx) => (
            <Col key={idx} className="mb-4">
              <Card className="h-100 shadow ">
                <Card.Img
                  variant="top"
                  src={image}
                  style={{ maxHeight: "355px" }}
                  className="custom-product-image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mt-auto">
                    <span className="h3 mt-auto">Card title</span>
                  </Card.Title>
                  <Card.Title>Price: 20,000,000 VNĐ</Card.Title>
                  {/* <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text> */}
                  <Button variant="primary" className="mx-auto shadow">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
