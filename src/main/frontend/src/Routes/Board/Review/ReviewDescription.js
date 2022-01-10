import React from "react";
import { FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";
import { getTimeGap } from "Utils/time";

const ReviewDescription = ({ description, itemRegTime }) => {
  const timeGap = getTimeGap(itemRegTime);

  return (
    <FlexBox column>
      <Text fontSize="15px" lineHeight={1.4} whiteSpace="pre-wrap">
        {description}
      </Text>
      <Text
        fontSize="13px"
        color={theme.colors.dark}
        fontWeight={500}
        marginTop="10px"
      >{`${timeGap} 전`}</Text>
    </FlexBox>
  );
};
export default ReviewDescription;
