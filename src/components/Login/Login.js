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
        backgroundColor: "#fff",
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
    });
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
            });
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
                    >
                        <h5>Create an account</h5>
                        <TextField label="First Name" />
                        <br />
                        <TextField label="Last Name" />
                        <br />
                        <TextField label="Username or Email" />
                        <br />
                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <br />
                        <TextField
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <br />
                        <input
                            className={classes.submit}
                            type="submit"
                            value="Create an account"
                        />
                        <div className={classes.small}>
                            <small>Already have an account? Login</small>
                        </div>
                    </form>
                </div>
                <div className={classes.dashContainer}>
                    <div className={classes.dash}></div>
                    <div>Or</div>
                    <div className={classes.dash}></div>
                </div>

                <button className={classes.thirdPartyLoginBtn}>
                    <img src={fbLogo} alt="" className={classes.logo} />
                    Continue with Facebook
                </button>
                <br />
                <button
                    onClick={handleGoogleSignIn}
                    className={classes.thirdPartyLoginBtn}
                >
                    <img src={googleLogo} alt="" className={classes.logo} />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
