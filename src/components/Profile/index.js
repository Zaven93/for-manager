import React from 'react';
import "./Profile.scss";
import avatar from "../../assets/img/profile-image.png";
import notification from "../../assets/img/notification.svg";
import enter from "../../assets/img/enter.svg";

const Profile = () => {
    return (
        <div className="profile-container">
        <div className="profile-data">
                <img className="avatar" src={avatar} alt="profile-avatar" />
                <div className="personal-info">
                     <span>Name Surname</span>
                     <span>Manager</span>
                </div>
                <img src={notification} alt="notification"/>
                <img src={enter} alt="enter"/>
        </div>
        </div>
    )
}

export default Profile;