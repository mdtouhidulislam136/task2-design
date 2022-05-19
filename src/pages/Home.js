import React from 'react';
import './exercise.css';

export default function Home() {
  return (
    <div className="tamk-profile">
      <img src="./robin.jpg" className="profile_image" alt="" />
        <h5>You Name</h5>
        <h6>Add title or description here</h6>
        <h6 className="home"><i class="fa-solid fa-house"></i> Home</h6>
        <a href="" className="menu">Menu <i class="fa-solid fa-arrow-right"></i></a>
        <h6 > <i class="fa-solid fa-user"> </i> Profile View</h6>
        <h6> <i class="fa-solid fa-gear"></i>Settings View</h6>

    </div>
  )
}
