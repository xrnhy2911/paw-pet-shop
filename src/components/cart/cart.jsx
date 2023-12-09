import React from "react";
import "../cart/cart.css";
import cat from "../../img/bonludan.jpeg";
import pate from "../../img/snappy.jpg";
// import bat from "../../img/bat.jpg";
import { Link } from "react-router-dom";
const handleIncreaseQuantity = () => {
  // Add your logic to increase the quantity
};

const handleDecreaseQuantity = () => {
  // Add your logic to decrease the quantity
};
export default function Cart() {
  return (
    <div className="cart-container">
      <h1>Giỏ hàng của tôi</h1>
      <div className="cart">
        <div className="cart-product">
          <div className="product">
            <img src={cat} alt="" />
            <div className="product-info">
              <h3 className="product-name">Nha WC cao cap</h3>
              <h4 className="product-price">345.000</h4>
              <h4 className="product-offer">10%</h4>
              <p className="product-quantity">
                {" "}
                <button className="btn" onClick={handleDecreaseQuantity}>
                  -
                </button>
                <input value="1" name="" />
                <button className="btn" onClick={handleIncreaseQuantity}>
                  +
                </button>
              </p>
              <p className="product-remove">
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span className="remove">Gỡ bỏ</span>
              </p>
            </div>
          </div>

          <div className="product">
            <img src={pate} alt="" srcset="" />
            <div className="product-info">
              <h3 className="product-name">Pate Snappy Tom</h3>
              <h4 className="product-price">15.000</h4>
              <h4 className="product-offer">10%</h4>
              <p className="product-quantity">
                {" "}
                <button className="btn" onClick={handleDecreaseQuantity}>
                  -
                </button>
                <input value="1" name="" />
                <button className="btn" onClick={handleIncreaseQuantity}>
                  +
                </button>
              </p>
              <p className="product-remove">
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span className="remove">Gỡ bỏ</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cart-total">
          <p>
            <span>Subtotal</span>
            <span>360.000</span>
          </p>

          <p>
            <span>Number of Items</span>
            <span>2</span>
          </p>

          <p>
            <span>You Save</span>
            <span>36.000</span>
          </p>

          <p>
            <span>Tax</span>
            <span>0</span>
          </p>
          <div className="total">
            <p>
              <span>
                <b>Total</b>
              </span>
              <span>
                <b>324.000</b>
              </span>
            </p>
            {/* <a href="/"></a> */}
            <Link to={"/credit"}>Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
