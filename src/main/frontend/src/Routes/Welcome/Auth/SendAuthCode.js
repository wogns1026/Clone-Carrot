import React, { useState } from "react";
import { FlexBox, InputWithCheck } from "Components/Universal";
import { confirmAuthCode } from "Firebase/Auth/phone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendAuthCode = ({ callback }) => {
  const [valid, setValid] = useState(false);
  const [input, setInput] = useState();

  const authentication = (payload) => {
    if (payload.authSuccess) {
      setValid(payload.authSuccess);
      callback(payload);
    }
  };

  const send = () => {
    if (input && input.length === 6) {
      confirmAuthCode(input, authentication);
    } else {
      toast.warning("인증번호를 다시 입력해주세요");
    }
  };

  return (
    <>
      <FlexBox column center gap="20px">
        <InputWithCheck
          placeholder="인증번호 입력"
          initText="확인"
          validText="확인 완료"
          onChange={setInput}
          callback={send}
          validation={valid}
        />
      </FlexBox>
      <ToastContainer />
    </>
  );
};
export default SendAuthCode;
