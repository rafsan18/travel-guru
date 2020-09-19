import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
            };
            return signedInUser;
            // setUser(signedInUser);
            // setLoggedInUser(signedInUser);
            //history.replace(from);
        })
        .catch((error) => {
            console.log(error);
        });
};
