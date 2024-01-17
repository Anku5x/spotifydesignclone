import React from "react";
import Logo from "../images/Spotify-Logo.png";
export default function Footer() {
  return (
    <>
      <div className="footer-outerbox">
        <div className="footer-innerbox1">
          <div className="footer-logorow footer-margintop">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "60px", height: "60px" }}
            ></img>
            <p className="spotify-design-text">
              <strong>Spotify</strong>.Design
            </p>
          </div>
          <div className="footer-margintop">
            <ul className="footer-liststyle">
                <li>
                    Newsroom
                </li>
                <li>
                    Spotify Jobs
                </li>
                <li>
                    Spotify.com
                </li>
                <li>
                    Spotify R&D Engineering
                </li>
                <li>
                Spotify R&D Research
                </li>
                <li>
                    Spotify R&D Insights
                </li>
                
            </ul>
          </div>
          <div className="footer-margintop">
          <ul className="footer-liststyle">
                <li>
                    Instagram
                </li>
                <li>
                    Twitter
                </li>                
            </ul>
          </div>
          <div className="footer-margintop"><ul>
            <li><strong>SE</strong></li>
            <li><strong>UK</strong></li>
            <li><strong>SE</strong></li>
            </ul>
            </div>
        </div>
        <div className="footer-innerbox2">
          <ul className="footer-innerlist footer-liststyle">
            <li>© 2020 Spotify AB </li>
            <li> Legal </li>
            <li> Privacy </li>
            <li> Cookies </li>
            <li> Revoke Access </li>
            <li> RSS </li>
          </ul>
        </div>
      </div>
    </>
  );
}
