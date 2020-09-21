import React, { useContext } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../image/Logo.png";
import "./Header.css";
import { signOutFromAccount } from "../Login/loginManager";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { destinationName } = useParams();

    const handleSignOut = () => {
        signOutFromAccount().then((res) => {
            setLoggedInUser(res);
        });
    };

    const history = useHistory();
    const location = useLocation();

    const headerStyleChange =
        location.pathname === "/login" ||
        location.pathname === `/hotel/${destinationName}`;

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
                className={headerStyleChange ? "visibility" : "search-field"}
                type="text"
                placeholder="Search your Destination..."
            />
            <Link className={headerStyleChange ? "text-dark" : ""} to="./home">
                News
            </Link>
            <Link
                className={headerStyleChange ? "text-dark" : ""}
                to="./destinations"
            >
                Destinations
            </Link>
            <Link className={headerStyleChange ? "text-dark" : ""} to="./blog">
                Blog
            </Link>
            <Link
                className={headerStyleChange ? "text-dark" : ""}
                to="./contact"
            >
                Contact
            </Link>

            {loggedInUser.isSignedIn ? (
                <div>
                    <span
                        className={
                            headerStyleChange
                                ? "text-dark font-weight-bold"
                                : "text-light font-weight-bold"
                        }
                    >
                        {loggedInUser.displayName}
                    </span>
                    <button
                        className="btn btn-warning ml-2"
                        onClick={handleSignOut}
                    >
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
