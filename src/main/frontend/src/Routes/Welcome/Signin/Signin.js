import React from "react";
import WelcomeContainer from "../WelcomeContainer";
import AuthPhoneNumber from "../Auth/AuthPhoneNumber";
import WelcomeTitle from "../WelcomeTitle";
import { FlexBox, ImageButton } from "Components/Universal";
import { authByGoogles } from "Firebase/Auth/Google/GoogleAuth";
import google_signin_btn from "images/google_signin_btn.png";
import kakao_signin_btn from "images/kakao_signin_btn.png";

const Signin = () => {
  // const navigate = useNavigate();
  const callback = (result) => {
    console.log(result);
  };

  return (
    <WelcomeContainer>
      <WelcomeTitle />
      <FlexBox column center gap="20px">
        <AuthPhoneNumber />
      </FlexBox>
      <ImageButton
        src={google_signin_btn}
        onClick={() => authByGoogles(callback)}
      />
      <ImageButton src={kakao_signin_btn} />
    </WelcomeContainer>
  );
};
export default Signin;
