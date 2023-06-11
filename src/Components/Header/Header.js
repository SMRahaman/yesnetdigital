import React from "react";
import logo from "../../assest/logo/logo2.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-items">
        <div className="header_logo_menu">
          <div>
            <img src={logo} className="h_logo" />
          </div>

          <ul className="menu">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Course</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="header_button">Subadmin Login</button>
          <button className="header_button">Admin Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
