import React from "react";
import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => (
  <div className="not-found">
    {/* <Image src={image} alt="not-found" fluid style={{ maxHeight: "400px" }} /> */}
    <div className="flex">
      <p>Trang này không có trên bản đồ ･ﾟ･(｡&gt;ω&lt;｡)･ﾟ･</p>
      <Link to="/" className="link-home">
        Trở về trang chủ
      </Link>
    </div>
  </div>
);

export default NotFound;
