import React from "react";
import Logo from '../images/Spotify-Logo.png'
export default function Navbar(props) {
  return (
    <>
      <div className="nav-container1">
        <div className="nav-container2">
          <div>
          <img className='logo-img' src={Logo} style={{width: '60px', Height: '60px', marginTop: '5px'}}></img>
          </div>
        <p className="spotify-design-text">
          <strong>Spotify</strong>.Design
        </p>
        </div>
        
        <div className="nav-container3">
          <button className='nav-btn'>☰</button>
          <ul className="nav-list-items">
            <li>
              <strong>Stories</strong>
            </li>
            <li>
              <strong>Listen</strong>
            </li>
            <li>
              <strong>Team</strong>
            </li>
            <li>
              <strong>Tools</strong>
            </li>
          </ul>
       
      </div>
      </div>
    </>
  );
}
