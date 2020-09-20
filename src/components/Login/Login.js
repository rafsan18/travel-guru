import React, { useContext, useState } from "react";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import fbLogo from "../../image/Icon/fb.png";
import googleLogo from "../../image/Icon/google.png";

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import {
    handleFbSignIn,
    handleGoogleSignIn,
    initializeLoginFramework,
} from "./loginManager";
import { CloseButton } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    container: {
        maxWidth: "570px",
        backgroundColor: "white",
        margin: "0 auto",
        marginTop: "20px",
        padding: "20px 30px 10px 20px",
        border: "1px solid lightgray",
        borderRadius: "5px",
    },

    submit: {
        backgroundColor: "#F9A51A",
        border: "none",
        borderRadius: "8px",
        padding: "5px",
    },
    small: {
        textAlign: "center",
    },
    dashContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "460px",
        margin: "10px auto",
    },
    dash: {
        height: "1px",
        border: ".1px solid lightgray",
        width: "30%",
        margin: "2px 3px",
    },
    logo: {
        height: "20px",
        justifySelf: "start",
        marginRight: "40px",
    },
    thirdPartyLoginBtn: {
        width: "460px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        border: "1px solid lightgray",
    },
}));

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        password: "",
        email: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        error: "",
    });
    const [newUser, setNewUser] = useState(false);

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        });
    };

    const fbSignIn = () => {
        handleFbSignIn().then((res) => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        });
    };

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length >= 6;
            const containNumber = /\d+/.test(e.target.value);
            isFieldValid = isPasswordValid && containNumber;
        }
        if (e.target.name === "confirmPassword") {
            isFieldValid = e.target.value === user.password;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    };

    const classes = useStyles();

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className={classes.container}>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        {newUser ? (
                            <h5>Create an account</h5>
                        ) : (
                            <h5>Sign In</h5>
                        )}

                        {newUser && (
                            <TextField
                                label="First Name"
                                required
                                onBlur={handleBlur}
                                name="firstName"
                            />
                        )}
                        <br />
                        {newUser && (
                            <TextField
                                label="Last Name"
                                required
                                onBlur={handleBlur}
                                name="lastName"
                            />
                        )}
                        <br />
                        <TextField
                            label="Username or Email"
                            required
                            onBlur={handleBlur}
                            name="email"
                        />

                        <br />
                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onBlur={handleBlur}
                            name="password"
                        />
                        <br />
                        {newUser && (
                            <TextField
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onBlur={handleBlur}
                                name="confirmPassword"
                            />
                        )}
                        <br />
                        {newUser ? (
                            <input
                                className={classes.submit}
                                type="submit"
                                value="Create an account"
                            />
                        ) : (
                            <input
                                className={classes.submit}
                                type="submit"
                                value="Sign in"
                            />
                        )}
                        <small style={{ color: "red" }}>{user.error}</small>
                        <div className={classes.small}>
                            <small>
                                Already have an account?{" "}
                                <span
                                    className="toggle-field"
                                    onClick={() => setNewUser(!newUser)}
                                >
                                    {newUser ? "Login" : "Create an account"}
                                </span>
                            </small>
                        </div>
                    </form>
                </div>
                <div className={classes.dashContainer}>
                    <div className={classes.dash}></div>
                    <div>Or</div>
                    <div className={classes.dash}></div>
                </div>

                <button
                    className={`${classes.thirdPartyLoginBtn} btn btn-light`}
                    onClick={fbSignIn}
                >
                    <img src={fbLogo} alt="" className={classes.logo} />
                    Continue with Facebook
                </button>
                <br />
                <button
                    onClick={googleSignIn}
                    className={`${classes.thirdPartyLoginBtn} btn btn-light`}
                >
                    <img src={googleLogo} alt="" className={classes.logo} />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
