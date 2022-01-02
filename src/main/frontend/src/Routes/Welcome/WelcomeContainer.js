import { FlexBox } from "Components/Universal";
import theme from "Style/theme";

const WelcomeContainer = ({ children }) => {
  return (
    <FlexBox
      width="100%"
      height="100vh"
      column
      center
      crossLinearGradient={[theme.colors.lightGreen, theme.colors.carrot]}
    >
      <FlexBox
        column
        borderRadius="30px"
        bgColor={theme.colors.white}
        bottomShadow={theme.colors.grey}
        horizontalPadding="20px"
        verticalPadding="70px"
        gap="50px"
      >
        {children}
      </FlexBox>
    </FlexBox>
  );
};
export default WelcomeContainer;
