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

export const EditDeleteButtons = ({ modify, remove }) => (
  <FlexBox gap="10px">
    <UtilButton text="수정" callback={modify} />
    <UtilButton text="삭제" callback={remove} />
  </FlexBox>
);
