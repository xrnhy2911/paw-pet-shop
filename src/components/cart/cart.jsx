import React from "react";
import "../cart/cart.css"
import cat from "../../img/bonludan.jpeg";
import pate from "../../img/snappy.jpg";
import bat from "../../img/bat.jpg";

export default function Cart() {
    return (
        <div className="cart-container">
            <h1>My Cart</h1>
            <div className="cart">
                <div className="cart-product">
                    <div className="product">
                        <img src={cat} alt="" />
                        <div className="product-info">
                            <h3 className="product-name">Nha WC cao cap</h3>
                            <h4 className="product-price">345.000</h4>
                            <h4 className="product-offer">10%</h4>
                            <p className="product-quantity"> <input value="1" name="" /> </p>
                            <p className="product-remove">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <span className="remove">Remove</span>
                            </p>
                        </div>
                    </div>

                    <div className="product">
                        <img src={pate} alt="" srcset="" />
                        <div className="product-info">
                            <h3 className="product-name">Pate Snappy Tom</h3>
                            <h4 className="product-price">15.000</h4>
                            <h4 className="product-offer">10%</h4>
                            <p className="product-quantity"> <input value="1" name="" /> </p>
                            <p className="product-remove">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <span className="remove">Remove</span>
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
                        <span>35.500</span>
                    </p>

                    <p>
                        <span>Tax</span>
                        <span>25.000</span>
                    </p>
                    <div className="total">
                        <p>
                            <span>Total</span>
                            <span>345.500</span>
                        </p>
                        <a href="/credit">Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}