import { FlexBox } from "Components/Universal";
import theme from "styles/theme";

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
        width="300px"
        column
        center
        spaceBetween
        borderRadius="30px"
        bgColor={theme.colors.white}
        bottomShadow={theme.colors.grey}
        verticalPadding="20px"
        gap="20px"
      >
        {children}
      </FlexBox>
    </FlexBox>
  );
};
export default WelcomeContainer;
