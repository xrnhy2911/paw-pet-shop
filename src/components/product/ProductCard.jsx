import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import munchkin from "../../img/munchkin_cat.jpg";
import Container from "react-bootstrap/esm/Container";

export default function ProductCard() {
  return (
    <>
      <Container className="py-2">
        <h1 className="m-4">Our Products</h1>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col key={idx} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={munchkin} />
                <Card.Body>
                  <Card.Title>
                    <span className="h3">Card title</span>
                  </Card.Title>
                  <Card.Title>Price: 20,000,000 VNĐ</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="primary" className="shadow">
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
