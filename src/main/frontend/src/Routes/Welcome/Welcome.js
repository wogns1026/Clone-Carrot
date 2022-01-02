import WelcomeContainer from "./WelcomeContainer";
import WelcomeButton from "./WelcomeButton";
import WelcomeTitle from "./WelcomeTitle";
import { FlexBox } from "Components/Universal";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeTitle />
      <FlexBox column center gap="20px">
        <WelcomeButton to="/welcome/signin" minWidth="250px">
          로그인
        </WelcomeButton>
        <WelcomeButton to="/welcome/signup" minWidth="250px">
          회원가입
        </WelcomeButton>
      </FlexBox>
    </WelcomeContainer>
  );
};
export default Welcome;
