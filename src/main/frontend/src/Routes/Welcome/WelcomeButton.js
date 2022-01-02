import { Text, Button } from "Components/Universal";
import theme from "Style/theme";

const WelcomeButton = ({ children, ...rest }) => (
  <Button
    width="100%"
    height="50px"
    borderRadius="30px"
    bottomShadow={theme.colors.grey}
    color={theme.colors.carrot}
    {...rest}
  >
    <Text fontSize="18px" fontWeight={600} color={theme.colors.white}>
      {children}
    </Text>
  </Button>
);
export default WelcomeButton;
