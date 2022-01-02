import React, { useEffect, useState } from "react";
import { sendAuthMessage, setupRecaptcha } from "firebase-config";
import { Box, FlexBox, InputWithCheck } from "Components/Universal";

const SendPhoneNumber = ({ callback }) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setupRecaptcha();
    window.recaptchaVerifier
      .render()
      .then((widgetId) => (window.recaptchaWidgetId = widgetId));
  }, []);

  useEffect(() => {
    callback(valid);
  }, [valid, callback]);

  const send = (input) => {
    if (input && input.length >= 9) {
      sendAuthMessage({
        phoneNumber: input,
        callback: setValid,
      });
    } else {
      alert("전화번호를 다시 입력해주세요");
    }
  };

  return (
    <>
      <Box id="sign-in-button" />
      <FlexBox column center gap="20px">
        <InputWithCheck
          placeholder="휴대폰 번호 입력"
          initText="인증문자 받기"
          validText="재전송"
          callback={send}
          validation={valid}
        />
      </FlexBox>
    </>
  );
};
export default SendPhoneNumber;
