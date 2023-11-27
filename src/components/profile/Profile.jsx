import React from 'react';
import './profile.css'

const Profile = () => {
    return (
        <div className='profile-css'>
            <div className="picture-frame">
                <span className="wallpaper-holder"></span>
                <div>
                    <span class="dot"></span>
                </div>
                <div className="info-frame">
                <p>Name: John Doe</p>
                <p>Email: johndoe@example.com</p>
                <p>Location: New York</p>
            </div>
            </div>
            

        </div>
    );
};

export default Profile;