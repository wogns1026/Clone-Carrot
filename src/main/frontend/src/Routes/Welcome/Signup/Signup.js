import React, { useState } from "react";
import WelcomeContainer from "../WelcomeContainer";
import WelcomeTitle from "../WelcomeTitle";
import PostCode from "./PostCode";
import AuthPhoneNumber from "../Auth/AuthPhoneNumber";
import { FlexBox, InputWithCheck } from "Components/Universal";

const Signup = () => {
  const [postCode, setPostCode] = useState("");
  const [username, setUsername] = useState("");

  const getPostCode = (fullAddress) => {
    setPostCode(fullAddress);
  };
  return (
    <WelcomeContainer>
      <PostCode callback={getPostCode} />
      {postCode && (
        <FlexBox column center gap="20px">
          <WelcomeTitle />
          <InputWithCheck
            placeholder="닉네임(2~8자)"
            callback={(input) => {
              setUsername(input);
              return true;
            }}
            onChanged={() => setUsername("")}
            validation={(input) =>
              input && input.length >= 2 && input.length <= 8
            }
            initText="중복확인"
            validText="사용가능"
          />
          {username && <AuthPhoneNumber />}
        </FlexBox>
      )}
    </WelcomeContainer>
  );
};
export default Signup;
