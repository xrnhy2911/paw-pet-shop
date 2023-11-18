import React from "react";

/* import fb from '';
import insta from "../img/instagram.png"; */
import "../footer/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer">
        <div className="sb_footer-link">
          <div className="sb_footer-link_div">
            <h4>MENU</h4>
            <a href="/home">
              <p>HOME</p>
            </a>

            <a href="/shop">
              <p>SHOP</p>
            </a>

            <a href="/about">
              <p>ABOUT</p>
            </a>

            <a href="/contact">
              <p>CONTACT</p>
            </a>
          </div>
          <div className="sb_footer-link_div">
            <h4>INFO</h4>
            <a href="/faq">
              <p>FAQ</p>
            </a>

            <a href="/Shipping">
              <p>Shipping & Returns</p>
            </a>

            <a href="/Store Policy">
              <p>Store Policy</p>
            </a>

            <a href="/Payment Methods">
              <p>Payment Methods</p>
            </a>
          </div>
          <div className="sb_footer-link_div">
            <h4>CUSTOMER SERVICE</h4>
            <a href="/hotline">
              <p>123-456-789</p>
            </a>

            <a href="/mail">
              <p>info@my-domain.com</p>
            </a>
          </div>

          <div className="sb_footer-link_div">
            <h4>FOLLOW OUR</h4>
            <div className="socialmedia">
              {/* <p><img src={'../'} alt="" srcset="" /></p>
                            <p><img src={insta} alt="" srcset="" /></p> */}
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
