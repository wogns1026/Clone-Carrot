// Import the functions you need from the SDKs you need
import {
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "Firebase/firebaseConfig";
import AuthErrorHandler from "./AuthErrorHandler";

export const renderRecaptcha = (callback) => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button", // 빈 HTML 요소에 이 claseName을 붙여야 작동
    {
      size: "invisible", // 보이지 않는 버전 (검증 pass)
      // size : "normal", // 보이는 버전 (사람이 수동 검증)
      callback: callback,
      "expired-callback": () => resetRecaptcha(),
    },
    auth
  );
};
// 로그인 요청을 제출하기 전에 reCAPTCHA를 사전 렌더링
export const preRenderRecaptcha = () => {
  window.recaptchaVerifier
    .render()
    .then((widgetId) => (window.recaptchaWidgetId = widgetId));
};
// Recaptcha 만료된 경우 재실행 하기 위함
export const resetRecaptcha = () => {
  window.recaptchaVerifier.reset(window.recaptchaWidgetId);
};

export const authByPhone = (phoneNumber, callback) => {
  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      callback(true);
    })
    .catch((error) => {
      AuthErrorHandler(error.code);
      callback(false);
    });
};
export const confirmAuthCode = (authCode, callback) => {
  window.confirmationResult
    .confirm(authCode)
    .then((result) => {
      // 인증 성공
      const credential = PhoneAuthProvider.credential(
        window.confirmationResult.verificationId,
        authCode
      );
      // firebase 서버에 로그인 정보 전달
      signInWithCredential(auth, credential).catch((error) =>
        AuthErrorHandler(error.code)
      );
      callback({
        authSuccess: true,
        id: result.user.phoneNumber,
        authType: "phone",
      });
    })
    .catch((error) => {
      AuthErrorHandler(error.code);
    });
};
