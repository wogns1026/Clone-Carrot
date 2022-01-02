import React, { useEffect, useState } from "react";
import { confirmAuthCode } from "firebase-config";
import { FlexBox, InputWithCheck } from "Components/Universal";

const SendAuthCode = ({ callback }) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    callback(valid);
  }, [valid, callback]);

  const authentication = (result) => {
    if (result) {
      setValid(result);
      alert(`인증 성공 ${result}`);
    }
  };

  const send = (input) => {
    if (input && input.length === 6) {
      confirmAuthCode({ authCode: input, callback: authentication });
    } else {
      alert("인증번호를 다시 입력해주세요");
    }
  };

  return (
    <FlexBox column center gap="20px">
      <InputWithCheck
        placeholder="인증번호 입력"
        initText="확인"
        validText="확인 완료"
        callback={send}
        validation={valid}
      />
    </FlexBox>
  );
};
export default SendAuthCode;
