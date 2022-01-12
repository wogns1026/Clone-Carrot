import { FlexBox, Box, Text } from "Components/Universal";
import theme from "Style/theme";

const Contact = ({ info }) => (
  <FlexBox gap="10px" flexWrap>
    {info.map(({ text, address }) => (
      <Box key={text}>
        <Text color={theme.colors.lightGrey}>{text}</Text>
        <span>{address}</span>
      </Box>
    ))}
  </FlexBox>
);
export default Contact;
