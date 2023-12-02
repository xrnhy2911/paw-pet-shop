import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { productDataList as cartItems } from "../../data/data";
import "./small-shopping-cart.css";
const SmallShoppingCart = ({ show, onHide }) => {
  if (cartItems == null) {
    return null;
  }
  return (
    <Modal id="modal-right" show={show} onHide={onHide} size="md">
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#302f51", color: "white" }}
      >
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}
      >
        {cartItems.map((item, index) => (
          <Row key={index} className="mb-2">
            <Col xs={3}>
              <Image src={item.image} alt={item.title} fluid rounded />
            </Col>
            <Col xs={8}>
              <p className="mb-0">{item.title}</p>
              <p className="mb-0">
                ${item.price}
                {/* x {item.quantity} */}
              </p>
              {/* <p className="mb-0">Quantity: {item.quantity}</p> */}
            </Col>
            <Col xs={1} className="text-right">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Remove item")}
              >
                &#10006;
              </span>
            </Col>
          </Row>
        ))}
        <hr />
        <Row>
          <Col>
            <p className="mb-0 font-weight-bold flex">Total: $XXX</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row className="mx-auto">
          <Col>
            <button
              id="custom-button"
              className="p-2"
              onClick={() => console.log("View In Detail clicked")}
              block
            >
              View In Detail
            </button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default SmallShoppingCart;
