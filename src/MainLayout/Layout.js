import React from "react";
import Header from "../ShareComponent/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ShareComponent/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
