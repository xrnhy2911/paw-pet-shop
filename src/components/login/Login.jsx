import React from 'react';
import theCat from '../../img/babycute.jpg'
import './login.css'

export default function Login(){
    return(
        <div className="login_contact">
            {/* <h1>Contact Us</h1> */}
            <div className="login_sb_contact"> {/* container */}
                <div className="login_sb_contact-link"> {/* main */}
                <div className="login_contact-img">
                        <img src={theCat} alt="" srcset="" />
                    </div>
                    <div className="login_sb_contact-link-div"> {/* content */}
                    <h2> Login </h2>
                    <form action="#" method="post">
                        <input type="email" name="name" placeholder="Enter Your Email" />
                        <input type="password" name="cf_pass" placeholder="Confirm Password" />
                        <button type="submit" className="login_btn"> Login <i className="fas fa-paper"></i></button>
                    </form>
                    </div>
                   
                </div>
            </div>
        </div>

    );
};
