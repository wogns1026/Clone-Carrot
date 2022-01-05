import React from "react";
import WelcomeContainer from "../WelcomeContainer";
import AuthByPhoneNumber from "../Auth/AuthByPhoneNumber";
import AuthByGoogle from "../Auth/AuthByGoogle";
import WelcomeTitle from "../WelcomeTitle";
import { FlexBox } from "Components/Universal";
const Signin = () => {
  // const navigate = useNavigate();

  const request = ({ id, authType }) => {
    console.log(`인증방식: ${authType}, ID: ${id}`);
  };

  return (
    <WelcomeContainer>
      <WelcomeTitle />
      <AuthByPhoneNumber callback={request} />
      <FlexBox column center>
        <AuthByGoogle callback={request} />
      </FlexBox>
    </WelcomeContainer>
  );
};
export default Signin;
