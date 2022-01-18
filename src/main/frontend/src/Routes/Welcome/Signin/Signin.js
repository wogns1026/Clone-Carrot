import React from "react";
import WelcomeContainer from "../WelcomeContainer";
import AuthByPhoneNumber from "../Auth/AuthByPhoneNumber";
import AuthByGoogle from "../Auth/AuthByGoogle";
import WelcomeTitle from "../WelcomeTitle";
import { FlexBox } from "Components/Universal";
import AuthByKakao from "../Auth/AuthByKakao";
import { useFetchUserByPhoneNumber } from "../hooks/useFetchUserByPhoneNumber";

const Signin = () => {
  const { signin } = useFetchUserByPhoneNumber();

  const request = ({ id, authType }) => {
    if (authType === "phone") {
      signin(id);
    }
  };

  return (
    <WelcomeContainer>
      <WelcomeTitle />
      <AuthByPhoneNumber callback={request} />
      <FlexBox column center>
        <AuthByGoogle callback={request} />
        <AuthByKakao callback={request} />
      </FlexBox>
    </WelcomeContainer>
  );
};

export default Signin;
