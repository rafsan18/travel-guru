import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../image/Logo.png";
import "./Header.css";
import { signOutFromAccount } from "../Login/loginManager";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        signOutFromAccount().then((res) => {
            setLoggedInUser(res);
        });
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
            <a className={headerStyleChange ? "text-dark" : ""} href="./home">
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
