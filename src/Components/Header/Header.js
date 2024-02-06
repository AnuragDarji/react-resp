import React, { useState } from "react";
import "./Header.css";
// import Card from "../Card/Card";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="header-container">
        <p>Soft UI Design System</p>
        <nav>
          <ul id="navbar" className={click ? "#navbar active" : "#navbar"}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Profile">Profile</a>
            </li>
            <li>
              <a href="#ComingSoon">ComingSoon</a>
            </li>
          </ul>
        </nav>
        <button id="header-btn">BUY NOW</button>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
