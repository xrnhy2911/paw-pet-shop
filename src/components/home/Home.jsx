import React from "react";
import chaBong from "../img/chabongimg.jpg"
import './home.css'

export default function Home() {
  return (
    <>
      <div className="wrapper">
          <img src={chaBong} alt="" />
          <div className="content">
            <h4>YOUR BEST <br /> FRIEND DESERVES <br /> THE BEST MEAL</h4>
          </div>
      </div>
    </>
  );
}
