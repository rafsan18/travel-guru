import React from "react";
import Header from "../Header/Header";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SecondaryHeader from "../Header/SecondaryHeader";
import fbLogo from "../../image/Icon/fb.png";
import googleLogo from "../../image/Icon/google.png";

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

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
        padding: "40px 50px",
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
        width: "80%",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "#fff",
        border: "1px solid lightgray",
    },
}));

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                console.log(user);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    };

    const classes = useStyles();
    return (
        <div className="login-pg ">
            <SecondaryHeader></SecondaryHeader>
            <div className="container">
                <div className={classes.container}>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <h5>Create an account</h5>
                        <TextField id="standard-basic" label="First Name" />
                        <br />
                        <TextField id="standard-basic" label="Last Name" />
                        <br />
                        <TextField
                            id="standard-basic"
                            label="Username or Email"
                        />
                        <br />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <br />
                        <TextField
                            id="standard-password-input"
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
        </div>
    );
};

export default Login;
