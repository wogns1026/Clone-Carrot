import React from "react";
import { FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";

const ReviewDescription = ({ description, itemRegTime }) => {
  const unixTime = Math.floor(
    new Date().getTime() - new Date(itemRegTime).getTime()
  );
  const date = new Date(unixTime);
  const hour = date.getHours();

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
      >{`${hour}시간 전`}</Text>
    </FlexBox>
  );
};
export default ReviewDescription;
