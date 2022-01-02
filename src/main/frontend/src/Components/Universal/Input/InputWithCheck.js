import { FlexBox, Input } from "Components/Universal";
import { useState } from "react";
import theme from "Style/theme";
import WelcomeButton from "../../../Routes/Welcome/WelcomeButton";

const InputWithCheck = ({
  callback,
  initText,
  validText,
  validation,
  ...rest
}) => {
  const [input, setInput] = useState("");
  const buttonColor = validation ? theme.colors.green : theme.colors.carrot;
  const outlineColor = validation ? theme.colors.green : theme.colors.darkGrey;

  const checkValidation = () => {
    if (validation) return;
    callback(input);
  };
  const handleChange = (input) => {
    setInput(input);
  };
  return (
    <FlexBox
      width="100%"
      height="50px"
      flexJustify="center"
      borderRadius="30px"
      border={outlineColor}
      outline={outlineColor}
      bottomShadow={theme.colors.lightGrey}
    >
      <Input
        width="100%"
        textCenter
        fontSize="16px"
        bgColor="transparent"
        onKeyPress={checkValidation}
        onChange={(e) => handleChange(e.target.value)}
        {...rest}
      />
      <WelcomeButton color={buttonColor} onClick={checkValidation}>
        {validation ? validText : initText}
      </WelcomeButton>
    </FlexBox>
  );
};
export default InputWithCheck;
