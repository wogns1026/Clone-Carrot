// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "Firebase/firebaseConfig";
import AuthErrorHandler from "./AuthErrorHandler";

export const provider = new GoogleAuthProvider();
export const authByGoogle = async (callback) => {
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // redux action? --> dispatch({ type: SET_USER, user });
      callback({
        authSuccess: true,
        id: result.user.email,
        authType: "google",
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      AuthErrorHandler(error.code);
    });
};
