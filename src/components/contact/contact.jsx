import React from "react";
import "../contact/contact.css";
import chabong from "../../img/chabongUs.jpg";

export default function Contact() {
    return(
        <div className="contact">
            <div className="sb_contact"> {/* container */}
                <div className="sb_contact-link"> {/* main */}
                    <div className="sb_contact-link-div"> {/* content */}
                    <h2>Contact Us</h2>
                    <form action="#" method="post">
                        <input type="text" name="name" placeholder="Enter Your Name" />
                        <input type="email" name="name" placeholder="Enter Your Email" />
                        <textarea name="message" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn">Send <i className="fas fa-paper"></i></button>
                    </form>
                    </div>
                    <div className="contact-img">
                        <img src={chabong} alt="" srcset="" />
                    </div>
                </div>
                

            </div>
        </div>

    );
}