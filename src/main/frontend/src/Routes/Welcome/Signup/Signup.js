import React, { useEffect, useState } from "react";
import WelcomeContainer from "../WelcomeContainer";
import WelcomeTitle from "../WelcomeTitle";
import AuthByPhoneNumber from "../Auth/AuthByPhoneNumber";
import { FlexBox, InputWithCheck } from "Components/Universal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostCode from "../PostCode/PostCode";

const Signup = () => {
  const [postCode, setPostCode] = useState("");
  const [username, setUsername] = useState("");
  const [valid, setValid] = useState(false);

  const submit = () => {
    if (username && username.length >= 2 && username.length <= 8) {
      setValid(true);
    } else {
      toast.warning("사용할 수 없는 닉네임 입니다.");
    }
  };

  useEffect(() => {
    setValid(false);
  }, [username]);

  return (
    <WelcomeContainer>
      <PostCode callback={setPostCode} />
      {postCode && (
        <FlexBox column center gap="20px">
          <WelcomeTitle />
          <InputWithCheck
            value={username}
            placeholder="닉네임(2~8자)"
            callback={submit}
            onChange={setUsername}
            validation={valid}
            initText="중복확인"
            validText="사용가능"
          />
          {valid && <AuthByPhoneNumber />}
        </FlexBox>
      )}
      <ToastContainer />
    </WelcomeContainer>
  );
};
export default Signup;
