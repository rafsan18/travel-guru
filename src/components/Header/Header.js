import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../image/Logo.png";
import "./Header.css";

const Header = () => {
    const history = useHistory();
    const location = useLocation();

    const headerStyleChange =
        location.pathname === "/login" || location.pathname === "/hotel";
    const handleLogin = () => {
        history.push("/login");
    };
    return (
        <div className="header ">
            <img
                className={headerStyleChange ? "dark-img" : "light-img"}
                src={logo}
                alt=""
            />
            <input
                className={headerStyleChange ? "visibility" : ""}
                type="text"
                placeholder="Search your Destination..."
            />
            <a className={headerStyleChange ? "text-dark" : ""} href="./news">
                News
            </a>
            <a
                className={headerStyleChange ? "text-dark" : ""}
                href="./destination"
            >
                Destination
            </a>
            <a className={headerStyleChange ? "text-dark" : ""} href="./blog">
                Blog
            </a>
            <a
                className={headerStyleChange ? "text-dark" : ""}
                href="./contact"
            >
                Contact
            </a>
            <button className="btn btn-warning" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Header;
