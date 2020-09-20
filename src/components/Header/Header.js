import { createGenerateClassName } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../image/Logo.png";
import "./Header.css";
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: "",
                    email: "",
                };
                setLoggedInUser(signedOutUser);
            })
            .catch((error) => {});
    };

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

            {loggedInUser.isSignedIn ? (
                <div>
                    <span className="font-weight-bold">
                        {loggedInUser.name}
                    </span>
                    <button className="btn btn-warning" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            ) : (
                <button className="btn btn-warning" onClick={handleLogin}>
                    Login
                </button>
            )}
        </div>
    );
};

export default Header;
