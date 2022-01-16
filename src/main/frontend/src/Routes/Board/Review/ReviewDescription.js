import React from "react";
import { Button, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";
import { getTimeGap } from "Utils/time";

const ReviewDescription = ({
  description,
  itemRegTime,
  addReview,
  parentReviewId,
}) => {
  const timeGap = getTimeGap(itemRegTime);

  return (
    <FlexBox column>
      <Text fontSize="15px" lineHeight={1.4} whiteSpace="pre-wrap">
        {description}
      </Text>
      <FlexBox flexAlign="center" marginTop="10px" gap="10px">
        <Text
          fontSize="13px"
          color={theme.colors.dark}
          fontWeight={500}
        >{`${timeGap} 전`}</Text>
        {parentReviewId === null && (
          <Button onClick={addReview}>댓글 달기</Button>
        )}
      </FlexBox>
    </FlexBox>
  );
};
export default ReviewDescription;
