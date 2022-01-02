import React from "react";
import WelcomeContainer from "../WelcomeContainer";
import AuthPhoneNumber from "../Auth/AuthPhoneNumber";
import WelcomeTitle from "../WelcomeTitle";
import { FlexBox } from "Components/Universal";

const Signin = () => {
  // const navigate = useNavigate();
  return (
    <WelcomeContainer>
      <WelcomeTitle />
      <FlexBox column center gap="20px">
        <AuthPhoneNumber />
      </FlexBox>
    </WelcomeContainer>
  );
};
export default Signin;
