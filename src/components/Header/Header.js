import React from "react";
import logo from "../../image/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header ">
      <img src={logo} alt="" />
      <input type="text" placeholder="Search your Destination..." />
      <a href="./news">News</a>
      <a href="./destination">Destination</a>
      <a href="./blog">Blog</a>
      <a href="./contact">Contact</a>
      <button className="btn btn-warning">Login</button>
    </div>
  );
};

export default Header;
