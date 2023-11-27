import React from "react";
import "./profile.css";
import theImg from "../../img/catlogin.jpg";

const Profile = () => {
    return (
        <div className="profile-css">
            <section className="profile">
                <header className="header">
                    <div className="details">                        
                        <img src={theImg} alt="" className="profile-pic" />
                        <h1 className="heading">Claire Doe</h1>
                        <div className="location">
                            <p>Member</p>
                        </div>
                        <div className="stats">
                            <div className="col-4">
                                <h4>20</h4>
                                <p>Reviews</p>
                            </div>
                            <div className="col-4">
                                <h4>10</h4>
                                <p>Communities</p>
                            </div>
                            <div className="col-4">
                                <h4>100</h4>
                                <p>Discussions</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="proflie-content">
                        <h2 className="heading">About Me</h2>
                        <p>
                            I am a software engineer who loves to learn new things. I have a passion for coding and I love to build things.
                        </p>
                </div>
            </section>
        </div>
    );
};

export default Profile;
