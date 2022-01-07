import React from "react";
import { Box, Text } from "Components/Universal";
import theme from "Style/theme";

const BoardDescription = ({ content = "", viewCnt = 0 }) => {
  return (
    <Box>
      <Text fontSize="16.5px" lineHeight={1.4} whiteSpace="pre-wrap">
        {content}
      </Text>
      <Box verticalMargin="25px">
        <Text
          fontSize="14px"
          fontWeight={500}
          color={theme.colors.dark}
        >{`조회 ${viewCnt}`}</Text>
      </Box>
    </Box>
  );
};

export default BoardDescription;
