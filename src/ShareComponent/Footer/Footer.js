import React from "react";
import logo from "../../assest/banner/banner-logo2.png";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_firstpart">
        <div className="footer_leftside">
          <div className="footer_img">
            <img src={logo} alt="" />
          </div>
          <div>
            <p style={{ color: "white", marginBottom: "20px" }}>
              The automated process starts as soon as your clothes go into the
              machine.
            </p>
          </div>
          <div>
            <FaTwitter className="scicon"></FaTwitter>
            <FaFacebookF className="scicon"></FaFacebookF>
            <FaPinterestP className="scicon"></FaPinterestP>
          </div>
        </div>
        <div className="footer_rightside">
          <ul>
            <li>
              <a href="">career</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Terms and conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">cancellation and refund policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_secondpart"></div>
    </div>
  );
};

export default Footer;
