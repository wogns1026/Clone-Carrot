// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig2 = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCl0gNjkB1PdvylBVYcoyg9-h7lp2-51CM",
  authDomain: "clone-carrot-8ad08.firebaseapp.com",
  projectId: "clone-carrot-8ad08",
  storageBucket: "clone-carrot-8ad08.appspot.com",
  messagingSenderId: "442800354844",
  appId: "1:442800354844:web:c7ab561470f6e2075c51d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// auth.languageCode = "ko";
