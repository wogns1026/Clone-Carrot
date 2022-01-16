import React from "react";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";
import { getTimeGap } from "Utils/time";

const TradeDetailInfo = ({
  itemId,
  itemTitle = "",
  category = "",
  cost = 0,
  itemRegTime = 0,
}) => {
  const timeGap = getTimeGap(itemRegTime);

  return (
    <Box marginBottom="30px">
      <FlexBox column gap="11px">
        <Text fontSize="19.5px" fontWeight={600}>
          {itemTitle}
        </Text>
        <Text
          fontSize="13px"
          color={theme.colors.dark}
          fontWeight={500}
        >{`${category} ∙ ${timeGap} 전`}</Text>
        <Text
          fontSize="17.5px"
          fontWeight={700}
        >{`${cost.toLocaleString()}원`}</Text>
      </FlexBox>
    </Box>
  );
};

export default TradeDetailInfo;
