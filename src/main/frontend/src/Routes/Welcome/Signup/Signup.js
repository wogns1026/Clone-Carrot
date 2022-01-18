import React, { useState } from "react";
import WelcomeContainer from "../WelcomeContainer";
import WelcomeTitle from "../WelcomeTitle";
import { FlexBox } from "Components/Universal";
import "react-toastify/dist/ReactToastify.css";
import PostCode from "../PostCode/PostCode";
import { useSignup } from "../hooks/useSignup";
import InputWithCheck from "../InputWithCheck";
import WelcomeButton from "../WelcomeButton";
import theme from "styles/theme";
import { useInputUserNameHandler } from "../hooks/useInputUserNameHandler";
import { useLocation } from "react-router-dom";

const Signup = () => {
  const {
    state: { phoneNumber },
  } = useLocation();
  const [address, setAddress] = useState("");
  const { userName, setUserName, valid, submitUserName } =
    useInputUserNameHandler();
  const { modify } = useSignup();

  const handleModifyUser = () => modify({ address, userName, phoneNumber });

  return (
    <WelcomeContainer>
      <PostCode callback={setAddress} />
      {address && (
        <FlexBox column center gap="20px">
          <WelcomeTitle />
          <InputWithCheck
            value={userName}
            placeholder="닉네임(2~8자)"
            callback={submitUserName}
            onChange={setUserName}
            validation={valid}
            initText="중복확인"
            validText="사용가능"
          />
          {valid && (
            <WelcomeButton
              color={theme.colors.carrot}
              onClick={handleModifyUser}
            >
              등록하기
            </WelcomeButton>
          )}
        </FlexBox>
      )}
    </WelcomeContainer>
  );
};
export default Signup;
