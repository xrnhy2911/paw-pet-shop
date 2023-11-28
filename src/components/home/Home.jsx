import React from "react";
import chaBong from "../../img/chabongimg.jpg";
// import chaBong1 from "../../img/chabong.jpg"
import "./home.css";
import Reactslider from "../slider/reactslider";

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
        <div className="content">
            <Reactslider/>
        </div>
      </div>
    </>
  );
}
