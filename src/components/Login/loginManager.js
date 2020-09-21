import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            };
            return signedInUser;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            };
            return signedInUser;
        })
        .catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });
};
