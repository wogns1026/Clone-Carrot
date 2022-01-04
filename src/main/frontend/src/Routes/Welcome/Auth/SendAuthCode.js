import React, { useEffect, useState } from "react";
import { FlexBox, InputWithCheck } from "Components/Universal";
import { confirmAuthCode } from "Firebase/Auth/Phone/PhoneAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendAuthCode = ({ callback }) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    callback(valid);
  }, [valid, callback]);

  const authentication = (result) => {
    if (result) {
      setValid(result);
      toast.success(`인증 성공 ${result}`);
    }
  };

  const send = (input) => {
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
          callback={send}
          validation={valid}
        />
      </FlexBox>
      <ToastContainer />
    </>
  );
};
export default SendAuthCode;
