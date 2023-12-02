import React from "react";
import "../credit/credit.css";
import pay from "../../img/paypal.png";
import stripe from "../../img/stripe.png";
import visa from "../../img/visa.png";
import master from "../../img/mastercard.png";

export default function Credit() {
    return (
        <section className="credit-section">
            <div className="container">
                <div className="credit-wrap">
                    <div className="credit-left">
                        <div className="credit-hd">
                            <div className="credit-hd-icon"><i className="ri-flashlight-fill"></i></div>
                            <div className="credit-hd-title">Order sum</div>
                            <p className="credit-hd-description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>

                        <div className="credit-content">
                            <div className="credit-body">
                                <div className="credit-plan">
                                    <div className="credit-plan-type">Pro</div>
                                    <div className="credit-plan-info">
                                        <div className="credit-plan-name">Professional Plan</div>
                                        <div className="credit-plan-price">$49 per month</div>
                                    </div>
                                    <a href="#" className="credit-plan-change">Change</a>
                                </div>
                                <div className="credit-sum">
                                    <div className="credit-sum-item">
                                        <div className="credit-sum-name">Additional fee</div>
                                        <div className="credit-sum-price">$10</div>
                                    </div>

                                    <div className="credit-sum-item">
                                        <div className="credit-sum-name">Discount 20%</div>
                                        <div className="credit-sum-price">-$10</div>
                                    </div>

                                    <div className="credit-sum-divider"></div>
                                    <div className="credit-sum-item credit-sum-total">
                                        <div className="credit-sum-name">Total</div>
                                        <div className="credit-sum-price">-$10</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="credit-r">
                        <form action="" className="credit-form">
                            <h1 className="credit-title">Payment Details</h1>
                            <div className="credit-method">
                                <input type="radio" name="credit-method" id="method-1" checked />
                                <label for="method-1" class="credit-method-item">
                                    <img src={visa} alt="" />
                                </label>

                                <input type="radio" name="credit-method" id="method-2" checked />
                                <label for="method-2" class="credit-method-item">
                                    <img src={master} alt="" />
                                </label>

                                <input type="radio" name="credit-method" id="method-3" checked />
                                <label for="method-3" class="credit-method-item">
                                    <img src={pay} alt="" />
                                </label>

                                <input type="radio" name="credit-method" id="method-4" checked />
                                <label for="method-4" class="credit-method-item">
                                    <img src={stripe} alt="" />
                                </label>
                            </div>

                            <div className="credit-form-gr">
                                <input type="email" placeholder=" " className="credit-form-control" id="email" />
                                <label for="email" className="credit-form-label credit-form-label-required">Email Address</label>
                            </div>

                            <div className="credit-form-gr">
                                <input type="text" placeholder=" " className="credit-form-control" id="card-number" />
                                <label for="card-number" className="credit-form-label credit-form-label-required">Card Number</label>
                            </div>

                            <div className="credit-form-gr-flex">
                                <div className="credit-form-gr">
                                    <input type="date" placeholder=" " className="credit-form-control" id="expiry-date" />
                                    <label for="expiry-date" className="credit-form-label credit-form-label-required">Expiry Date</label>
                                </div>

                                <div className="credit-form-gr">
                                    <input type="text" placeholder=" " className="credit-form-control" id="cvv" />
                                    <label for="cvv" className="credit-form-label credit-form-label-required">CVV</label>
                                </div>
                            </div>
                            <button type="submit" class="payment-form-submit-button"><i class="ri-wallet-line">Pay</i> </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
}