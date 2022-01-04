import React, { useEffect, useState } from "react";
import { useAutoDashInput } from "Hooks/useAutoDashInput";
import { Box, FlexBox, InputWithCheck } from "Components/Universal";
import { authByPhone } from "Firebase/Auth/Phone/PhoneAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { regDashPhone } from "reg";

const Sendinputber = ({ callback }) => {
  const [valid, setValid] = useState(false);
  const [input, setInput] = useAutoDashInput();

  useEffect(() => {
    callback(valid);
  }, [valid, callback]);

  const handleChange = (text) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(text)) {
      setInput(text);
    }
  };

  const send = () => {
    if (regDashPhone.test(input)) {
      authByPhone(
        `+82 ${input}`, // 대한한국
        setValid
      );
    } else toast.warning("전화번호를 다시 입력해주세요");
  };

  return (
    <>
      <FlexBox column center gap="20px">
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
export default Sendinputber;
