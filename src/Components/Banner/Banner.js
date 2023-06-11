import React from "react";
import logo from "../../assest/banner/banner-logo2.png";
import banner from "../../assest/banner/banner.jpg";
import icon1 from "../../assest/banner/banner_icon/icon-1.png";
import icon2 from "../../assest/banner/banner_icon/icon-2.png";
import icon3 from "../../assest/banner/banner_icon/icon-3.png";
import "./Banner.css";
const Banner = () => {
  const bannerMenu = [
    {
      id: 1,
      icon: icon1,
      firstText: "6+",
      secondText: "courses",
    },
    {
      id: 2,
      icon: icon2,
      firstText: "Expert",
      secondText: "mentors",
    },
    {
      id: 3,
      icon: icon3,
      firstText: "Lift time",
      secondText: "access",
    },
  ];
  return (
    <div className="banner">
      <div>
        <img src={banner} className="banner_img" />
      </div>
      <div className="banner_info">
        <img src={logo} className="banner_logo" />
        <h1 className="banner-heading">E-LEARNING</h1>
        <h1 className="banner-heading">PLATFORM</h1>
        <div>
          <p className="banner_pra">
            It is a learning and earning process by using your valuable free
            time at home through your smart phone only It is a very easy process
            and you can learn this process on your own mother tongue and you can
            earn from our community with selling some Courses Services or
            goods..
          </p>
        </div>
        <div className="button_group">
          <button className="banner_button">Login</button>
          <button className="banner_button">Signup</button>
        </div>
      </div>
      <div className="after_banner">
        {bannerMenu.map((bannericon) => (
          <div className="banner_menu" key={bannericon.id}>
            <img src={bannericon.icon} alt="" />
            <span>
              {bannericon.firstText} <br /> {bannericon.secondText}
            </span>
          </div>
        ))}
      </div>
      <div>
        <p
          style={{
            fontSize: "35px",
            textAlign: "center",
            margin: "100px 100px 100px 100px",
          }}
        >
          The Main objective of this setup is how to develop Skill's on digital
          marketing And how to generate revenue on it
        </p>
      </div>
    </div>
  );
};

export default Banner;
