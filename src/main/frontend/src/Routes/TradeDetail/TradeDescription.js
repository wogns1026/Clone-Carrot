import React from "react";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";

const TradeDescription = ({
  itemId,
  itemTitle = "",
  category = "",
  cost = 0,
  description = "",
  viewCnt = 0,
  itemRegTime = 0,
}) => {
  return (
    <FlexBox column>
      <Box marginBottom="30px">
        <FlexBox column gap="11px">
          <Text fontSize="19.5px" fontWeight={600}>
            {itemTitle}
          </Text>
          <Text
            fontSize="13px"
            color={theme.colors.dark}
            fontWeight={500}
          >{`${category} ∙ ${itemRegTime}시간 전`}</Text>
          <Text
            fontSize="17.5px"
            fontWeight={700}
          >{`${cost.toLocaleString()}원`}</Text>
        </FlexBox>
      </Box>
      <Text fontSize="16.5px" lineHeight={1.4} whiteSpace="pre">
        {description}
      </Text>
      <Box verticalMargin="25px">
        <Text
          fontSize="14px"
          fontWeight={500}
          color={theme.colors.dark}
        >{`조회 ${viewCnt}`}</Text>
      </Box>
    </FlexBox>
  );
};

export default TradeDescription;
