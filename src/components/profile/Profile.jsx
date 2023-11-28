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
                    <div>
                        <h2>Biography</h2>
                        <p>
                            I am a software engineer who loves to learn new things. I have a passion for coding and I love to build things.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam, dignissimos totam ea est modi officiis, adipisci ipsa incidunt voluptatibus voluptas quod asperiores. Ullam id, repellat vitae tenetur deleniti facere!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi libero rem a reprehenderit delectus, neque dolore ullam. Distinctio modi nam et sequi reprehenderit unde nobis tenetur minus veniam vero!
                        </p>
                    </div>
                    <div>
                        <h2>Profile</h2>
                        <p>
                            Join date: 11th 14, 2023
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;