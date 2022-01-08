import React from "react";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";

const TradeDetailInfo = ({
  itemId,
  itemTitle = "",
  category = "",
  cost = 0,
  itemRegTime = 0,
}) => {
  const unixTime = Math.floor(
    new Date().getTime() - new Date(itemRegTime).getTime()
  );
  const date = new Date(unixTime);
  const hour = date.getHours();

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
        >{`${category} ∙ ${hour}시간 전`}</Text>
        <Text
          fontSize="17.5px"
          fontWeight={700}
        >{`${cost.toLocaleString()}원`}</Text>
      </FlexBox>
    </Box>
  );
};

export default TradeDetailInfo;
