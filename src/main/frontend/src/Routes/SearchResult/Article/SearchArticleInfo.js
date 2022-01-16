import React from "react";
import { Text, FlexBox } from "Components/Universal";
import theme from "Style/theme";
const SearchArticleInfo = ({ itemTitle, cost = 0, location, viewCnt = 0 }) => {
  return (
    <FlexBox column>
      <Text fontSize="16px" verticalMargin="10px" notOverflow>
        {itemTitle}
      </Text>
      <Text fontSize="14px" color={theme.colors.darkGrey}>
        {location}
      </Text>
      <FlexBox spaceBetween>
        <Text
          fontSize="16px"
          fontWeight={600}
          verticalMargin="10px"
          color={theme.colors.carrot}
        >
          {cost}
        </Text>
        <FlexBox flexAlign="center">
          <Text fontSize="20px" color={theme.colors.carrot}>
            ♡
          </Text>
          <Text fontSize="14px"> {viewCnt}</Text>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default SearchArticleInfo;
