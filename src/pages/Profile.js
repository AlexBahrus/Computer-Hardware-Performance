import ProfileItem from "../component/ProfileItem";
import React from "react";
import './Profile.css';

const data = [
  {
    username: 'Alex Bahrus Syarif', 
    profileImage: 'alex.jpg',
    company: 'Universitas Diponegoro',
    location: 'Semarang, Tembalang',
    twitterUsername: 'none'
  }
];

export default function Profile() {
    return (
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <div className="cardContainer">
          {data.map((item, index) => 
            <ProfileItem 
              username={item.username} 
              profileImage={item.profileImage} 
              company={item.company} 
              location={item.location} 
              twitterUsername={item.twitterUsername}
              key={index}
            />
          )}
        </div>
      </div>
    );
}
