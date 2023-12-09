import React from "react";

import fb from "../../img/facebook-logo.png";
import insta from "../../img/instagram.png";
import "../footer/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer">
        <div className="sb_footer-link">
          <div className="sb_footer-link_div" style={{ fontWeight: 700 }}>
            <h4>CÔNG TY</h4>
            <a href="/home">
              <p>TRANG CHỦ</p>
            </a>

            <a href="/shop">
              <p>CỬA HÀNG</p>
            </a>

            <a href="/about">
              <p>THÔNG TIN</p>
            </a>

            <a href="/contact">
              <p>LIÊN HỆ</p>
            </a>
          </div>
          <div className="sb_footer-link_div">
            <h4>GIÚP ĐỠ</h4>
            <a href="/faq">
              <p>FAQ</p>
            </a>

            <a href="/Shipping">
              <p>GIAO VÀ TRẢ HÀNG</p>
            </a>

            <a href="/Store Policy">
              <p>Chính sách cửa hàng</p>
            </a>

            <a href="/Payment Methods">
              <p>Phương thức thanh toán</p>
            </a>
          </div>
          <div className="sb_footer-link_div">
            <h4>LIÊN HỆ</h4>
            <a href="/hotline">
              <p>123-456-789</p>
            </a>

            <a href="/mail">
              <p>info@my-domain.com</p>
            </a>
          </div>

          <div className="sb_footer-link_div">
            <h4>THEO DÕI</h4>
            <div className="socialmedia">
              <p>
                <img
                  className="social-media-image"
                  src={insta}
                  alt=""
                  srcset=""
                />
              </p>
              <p>
                <img className="social-media-image" src={fb} alt="" srcset="" />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} by PAWPET Shop.</p>
          </div>
          {/* <div className="sb_footer-below-link">
                        <a href="/term"><div><p>Terms & conditition</p></div></a>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
