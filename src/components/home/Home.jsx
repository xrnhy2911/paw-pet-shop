import React, { useState } from 'react';
import chaBong from "../../img/chabongimg.jpg";
import chaBong1 from "../../img/chabong.jpg"
// import chaBong1 from "../../img/chabong.jpg"
import "./home.css";
import Reactslider from "../slider/reactslider";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";



export default function Home() {

  return (
    <>
      <div className="wrapper">
        <div className="home-img">
          <img src={chaBong} alt="" />
        </div>
        <div className="store-quote">
          <h4>
            YOUR BEST <br /> FRIEND DESERVES <br /> THE BEST MEAL
          </h4>
        </div>
        <div
          className="home-frame-1"
        >
          <h1 className="home-h1">Story Teller</h1>
          <div className="banner-container" >
            <img src={chaBong1} alt="Banner" className="banner-image" />
            <div className='hover-story'>
              <p>There’s a cat named Caté <br /> Seeking for the pâté <br /> Loves to have a treat <br /> ... hates to pay for it <br />

                Sneaks into a café <br /> Sniffs foods on display <br /> Sees a plate of pâté <br /> "It’s a lucky day..."</p>

            </div>
            <a href="/products">
              <button
                className="hover-button"
              >
                SHOP NOW
              </button>
            </a>



          </div>
        </div>
        <div className="home-frame-2">
          <h1 className="home-h1">Best Sellers</h1>

          <div className="home-content">
            <Reactslider />
          </div>
        </div>

      </div >
    </>
  );
}
