import React from "react";
import { Link } from "react-router-dom";
import image from "../../img/not-found.png";
import Image from "react-bootstrap/Image";
import "./not-found.css";
const NotFound = () => (
  <div className="not-found">
    {/* <Image src={image} alt="not-found" fluid style={{ maxHeight: "400px" }} /> */}
    <div className="flex">
      <p>This Page is Not on the Map</p>
      <Link to="/" className="link-home">
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
