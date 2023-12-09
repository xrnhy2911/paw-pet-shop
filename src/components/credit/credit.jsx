import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../credit/credit.css";
import pay from "../../img/paypal.png";
import stripe from "../../img/stripe.png";
import visa from "../../img/visa.png";
import master from "../../img/mastercard.png";

export default function Credit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const emptyFields = Object.entries(formData).filter(
      ([field, value]) => value.trim() === ""
    );

    if (emptyFields.length > 0) {
      const fieldNames = emptyFields.map(([field]) => field);
      const errorMessage = `Xin vui lòng điền vào các trường còn trống sau:${
        fieldNames.length > 1 ? "s" : ""
      }: ${fieldNames.join(", ")}.`;

      alert(errorMessage);
    } else {
      // Implement your payment logic here
      alert("Đặt hàng thành công!");
      navigate("/products");
    }
  };
  return (
    <section className="credit-section">
      <div className="container">
        <div className="credit-wrap">
          <div className="credit-left">
            <div className="credit-hd">
              <div className="credit-hd-icon">
                <i className="ri-flashlight-fill"></i>
              </div>
              <div className="credit-hd-title">Order sum</div>
              <p className="credit-hd-description">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>

            <div className="credit-content">
              <div className="credit-body">
                <div className="credit-plan">
                  <div className="credit-plan-type">Pro</div>
                  <div className="credit-plan-info">
                    <div className="credit-plan-name">Patron</div>
                    <div className="credit-plan-price">Discount 20% </div>
                  </div>
                  <a href="/credit" className="credit-plan-change">
                    Change
                  </a>
                </div>
                <div className="credit-sum">
                  <div className="credit-sum-item">
                    <div className="credit-sum-name">Subtotal</div>
                    <div className="credit-sum-price">360.000 vnd</div>
                  </div>

                  <div className="credit-sum-item">
                    <div className="credit-sum-name">Discount 20%</div>
                    <div className="credit-sum-price">-36.000 vnd</div>
                  </div>

                  <div className="credit-sum-divider"></div>
                  <div className="credit-sum-item credit-sum-total">
                    <div className="credit-sum-name">Total</div>
                    <div className="credit-sum-price">324.000 vnd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="credit-rignt">
            <form action="" className="credit-form" onSubmit={handleSubmit}>
              <h1 className="credit-title">Payment Details</h1>
              <div className="credit-method">
                <input
                  type="radio"
                  name="credit-method"
                  id="method-1"
                  checked
                />
                <label for="method-1" className="credit-method-item">
                  <img src={visa} alt="" />
                </label>

                <input
                  type="radio"
                  name="credit-method"
                  id="method-2"
                  checked
                />
                <label for="method-2" className="credit-method-item">
                  <img src={master} alt="" />
                </label>

                <input
                  type="radio"
                  name="credit-method"
                  id="method-3"
                  checked
                />
                <label for="method-3" className="credit-method-item">
                  <img src={pay} alt="" />
                </label>

                <input
                  type="radio"
                  name="credit-method"
                  id="method-4"
                  checked
                />
                <label for="method-4" className="credit-method-item">
                  <img src={stripe} alt="" />
                </label>
              </div>

              <div className="credit-form-gr">
                <input
                  type="email"
                  placeholder=" "
                  className="credit-form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label
                  for="email"
                  className="credit-form-label credit-form-label-required"
                >
                  Email Address
                </label>
              </div>

              <div className="credit-form-gr">
                <input
                  type="number"
                  placeholder=" "
                  className="credit-form-control"
                  id="card-number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                <label
                  for="card-number"
                  className="credit-form-label credit-form-label-required"
                >
                  Card Number
                </label>
              </div>

              <div className="credit-form-gr-flex">
                <div className="credit-form-gr">
                  <input
                    type="date"
                    placeholder=" "
                    className="credit-form-control"
                    id="expiry-date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                  />
                  <label
                    for="expiry-date"
                    className="credit-form-label credit-form-label-required"
                  >
                    Expiry Date
                  </label>
                </div>

                <div className="credit-form-gr">
                  <input
                    type="text"
                    placeholder=" "
                    className="credit-form-control"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                  <label
                    for="cvv"
                    className="credit-form-label credit-form-label-required"
                  >
                    CVV
                  </label>
                </div>
              </div>
              <button type="submit" className="credit-form-submit-button">
                <i className="ri-wallet-line"></i> Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
