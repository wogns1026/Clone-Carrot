import React from "react";
import { Box, Text } from "Components/Universal";
import theme from "Style/theme";

const TradeDescription = ({ itemId, description = "", viewCnt = 0 }) => {
  return (
    <>
      <Text fontSize="16.5px" lineHeight={1.4} whiteSpace="pre-wrap">
        {description}
      </Text>
      <Box verticalMargin="25px">
        <Text
          fontSize="14px"
          fontWeight={500}
          color={theme.colors.dark}
        >{`조회 ${viewCnt}`}</Text>
      </Box>
    </>
  );
};

export default TradeDescription;
