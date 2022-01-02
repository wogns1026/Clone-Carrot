// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
} from "firebase/auth";

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

export const setupRecaptcha = (callback) => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => callback(response),
    },
    auth
  );
};
export const sendAuthMessage = ({ phoneNumber, callback }) => {
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      callback(true);
    })
    .catch((error) => {
      if (error.code === "auth/invalid-phone-number") {
        alert("전화번호를 다시 입력해주세요");
      }
      if (error.code === "auth/quota-exceeded") {
        alert("인증 가능 횟수를 초과했습니다");
      }
      console.log(`Error: ${error.code}`);
      callback(false);
      // Error; SMS not sent
    });
};
export const confirmAuthCode = ({ authCode, callback }) => {
  window.confirmationResult
    .confirm(authCode)
    .then((result) => {
      // 인증 성공
      const user = result.user;
      const credential = PhoneAuthProvider.credential(
        window.confirmationResult.verificationId,
        authCode
      );
      signInWithCredential(auth, credential).catch((error) =>
        console.log(error)
      );
      callback(true);
    })
    .catch((error) => {
      if (error.code === "auth/wrong-password") {
        alert("패스워드를 다시 확인해주세요");
      }
      if (error.code === "auth/user-not-found") {
        alert("이메일을 다시 확인해주세요");
      }
      if (error.code === "auth/invalid-verification-code") {
        alert("인증 코드를 다시 확인해주세요");
      }
      console.log(`Error: ${error}`);
      callback(false);
      // User couldn't sign in (bad verification code?)
    });
};

// grecaptcha 객체가 어디 소속인지를 모르겠음
// export const resetCaptcha = () => {
//   grecaptcha.reset(window.recaptchaWidgetId);
//   // Or, if you haven't stored the widget ID:
//   window.recaptchaVerifier.render().then(function (widgetId) {
//     grecaptcha.reset(widgetId);
//   });
// };
