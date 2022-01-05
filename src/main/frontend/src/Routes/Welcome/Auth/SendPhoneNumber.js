import React, { useEffect } from "react";
import { useAutoDashInput } from "Hooks/useAutoDashInput";
import { Box, FlexBox, InputWithCheck } from "Components/Universal";
import { authByPhone, renderRecaptcha } from "Firebase/Auth/phone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { regDashPhone } from "reg";

const SendPhoneNumber = ({ valid, setValid }) => {
  const [input, setInput] = useAutoDashInput();

  useEffect(() => {
    renderRecaptcha(); // 무조건 실행해주어야 함
  });

  const handleChange = (text) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(text)) setInput(text);
  };

  const send = () => {
    if (regDashPhone.test(input)) {
      authByPhone(`+82 ${input}`, setValid);
    } else toast.warning("전화번호를 다시 입력해주세요");
  };

  return (
    <>
      <FlexBox column center>
        <InputWithCheck
          placeholder="전화번호 입력"
          value={input}
          initText="로그인"
          validText="다시 전송"
          onChange={handleChange}
          callback={send}
          validation={valid}
        />
      </FlexBox>
      <ToastContainer />
      <Box id="sign-in-button" />
    </>
  );
};
export default SendPhoneNumber;
