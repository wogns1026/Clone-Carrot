import { Button, FlexBox } from "Components/Universal";
import theme from "Style/theme";

const UtilButton = ({ text, callback }) => (
  <Button
    width="50px"
    height="30px"
    borderRadius="10px"
    bgColor={theme.colors.grey}
    fontSize="15px"
    fontWeight={700}
    onClick={callback}
  >
    {text}
  </Button>
);

export const ButtonList = ({ data }) => (
  <FlexBox gap="10px">
    {data.map((d, index) => (
      <UtilButton key={index} text={d.text} callback={d.callback} />
    ))}
  </FlexBox>
);
