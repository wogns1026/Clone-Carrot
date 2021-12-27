import React from "react";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";

const Message = ({ text, color = theme.colors.red }) => (
  <Box width="100vw">
    <FlexBox flexJustify="center">
      <Text color={color}>{text}</Text>
    </FlexBox>
  </Box>
);
export default Message;
