import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../../img/munchkin_cat.jpg";
import "./product-detail.css"; // Thêm file CSS tùy chỉnh
import SmallShoppingCart from "../modal/SmallShoppingCart";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  // Simulate fetching product details based on productId
  const productDetails = {
    title: "Munchkin Cat",
    price: "20,000,000",
    description: "This is a lovely Munchkin Cat.",
    productId: productId,
    image: image1,
  };

  // Check if productDetails is available
  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const handleBuyNow = () => {
    navigate(`/cart`);
  };

  const handleAddToCart = () => {
    // Handle add to cart logic here
    setShowCart(true);
  };

  return (
    <>
      <Container>
        <Row className="p-4" style={{ margin: "20vh auto 5vh" }}>
          <Col xs={12} md={6}>
            <Image
              src={productDetails.image}
              alt={productDetails.title}
              fluid
              rounded
            />
          </Col>
          <Col xs={12} md={6}>
            <Card style={{ borderWidth: "0" }}>
              <Card.Body className="px-4">
                <Card.Title className="product-title">
                  <span className="h2" style={{ fontWeight: "600" }}>
                    {productDetails.title}
                  </span>
                </Card.Title>
                <Card.Subtitle className="product-subtitle">
                  <span className="h5" style={{ color: "#5d6bb0" }}>
                    Price: {productDetails.price} VNĐ
                  </span>
                </Card.Subtitle>
                <Card.Text className="mt-2">
                  <strong>Product ID:</strong> {productDetails.productId}
                </Card.Text>
                <Card.Text className="product-description">
                  <strong>Description:</strong> {productDetails.description}
                </Card.Text>
                <div className="button-container mt-5 mb-3 ">
                  <button
                    className="add-to-cart-button"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  <button className="buy-now-button" onClick={handleBuyNow}>
                    Buy Now
                  </button>
                </div>
                <p className="mt-2">
                  <Link to="/products">Back to Product Page</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {showCart && (
        <SmallShoppingCart show={showCart} onHide={() => setShowCart(false)} />
      )}
    </>
  );
};

export default ProductDetail;
