import { FlexBox, Input } from "Components/Universal";
import theme from "Style/theme";

const InputText = ({ ...rest }) => (
  <FlexBox
    width="100%"
    height="50px"
    flexJustify="center"
    borderRadius="30px"
    border={theme.colors.darkGrey}
    outline={theme.colors.dark}
    bottomShadow={theme.colors.lightGrey}
  >
    <Input
      width="100%"
      textCenter
      fontSize="16px"
      bgColor="transparent"
      {...rest}
    />
  </FlexBox>
);
export default InputText;
