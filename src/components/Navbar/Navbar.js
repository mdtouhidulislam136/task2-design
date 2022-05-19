import React from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";


export default function Navbar() {
  return (
    
        <div className="">
        <div className="navbar">
        <div className="nav-link-container">
            <Link to="/Home" className="nav-link" id="tamk">Tamk</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Profile" className="nav-link" id="nav-profile"> <img src="./robin.jpg" className="button" alt="" /></Link>
          </div>
        </div>
        </div>
    
  )
}
