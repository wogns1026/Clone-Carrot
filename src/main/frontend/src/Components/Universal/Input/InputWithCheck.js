import { FlexBox, Input } from "Components/Universal";
import WelcomeButton from "Routes/Welcome/WelcomeButton";
import theme from "styles/theme";

const InputWithCheck = ({
  callback,
  onChange,
  initText,
  validText,
  validation,
  children,
  ...rest
}) => {
  const buttonColor = validation ? theme.colors.green : theme.colors.carrot;
  const outlineColor = validation ? theme.colors.green : theme.colors.carrot;
  const shadowColor = theme.colors.lightGrey;
  const checkValidation = () => {
    if (!validation) callback();
  };
  return (
    <FlexBox
      width="100%"
      height="50px"
      flexJustify="center"
      borderRadius="30px"
      border={outlineColor}
      outline={outlineColor}
      bottomShadow={shadowColor}
    >
      <Input
        width="100%"
        textCenter
        fontSize="16px"
        bgColor="transparent"
        onKeyPress={checkValidation}
        onChange={onChange}
        {...rest}
      />
      <WelcomeButton color={buttonColor} onClick={checkValidation}>
        {validation ? validText : initText}
      </WelcomeButton>
    </FlexBox>
  );
};
export default InputWithCheck;
