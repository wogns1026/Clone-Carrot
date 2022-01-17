import { Button, FlexBox } from "Components/Universal";
import theme from "styles/theme";

export const ButtonList = ({ data }) => (
  <FlexBox gap="10px">
    {data.map(({ text, callback }, index) => (
      <Button
        key={index}
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
    ))}
  </FlexBox>
);
