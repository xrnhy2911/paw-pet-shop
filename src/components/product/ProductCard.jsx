import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import image1 from "../../img/munchkin_cat.jpg";
import image2 from "../../img/birman_1.jpg";
import image3 from "../../img/persian_1.jpg";
import image4 from "../../img/ragdoll_1.jpg";
import image5 from "../../img/ragdoll_2.jpg";
import image6 from "../../img/ragdoll_3.jpg";
import Container from "react-bootstrap/Container";
import './productCard.css'

export default function ProductCard() {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <>
      <Container className="py-2">
        <h1 className="m-4"><b><span className="h1">Our Products</span></b></h1>
        <Row xs={1} md={3} className="g-4">
          {images.map((image, idx) => (
            <Col key={idx} className="mb-4">
              <Card className="h-100 shadow d-flex flex-column">
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column flex-grow-1" id="custom-font">
                  <Card.Title>
                    <span className="h3">Card title</span>
                  </Card.Title>
                  <Card.Title> <span className="h4">Price: 20,000,000 VNĐ</span> </Card.Title>
                  <Card.Text>
                    <span className="p">This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.</span>
                    
                  </Card.Text>
                  <Button variant="primary" className="mt-auto mx-auto shadow">
                    <span className="p">
                    Add to Cart

                    </span>
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
