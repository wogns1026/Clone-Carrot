import { Text, Button } from "Components/Universal";
import theme from "Style/theme";

const WelcomeButton = ({ children, ...rest }) => (
  <Button
    width="100%"
    height="50px"
    borderRadius="30px"
    bottomShadow={theme.colors.grey}
    marginBottom="20px"
    color={theme.colors.carrot}
    {...rest}
  >
    <Text fontSize="16px" fontWeight={700} color={theme.colors.white}>
      {children}
    </Text>
  </Button>
);
export default WelcomeButton;
