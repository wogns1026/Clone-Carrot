import React, { useState } from "react";
import { Box, Button, FlexBox, Text } from "Components/Universal";
import { getTimeGap } from "utils/time";
import ReviewRegist from "Routes/Regist/ReviewRegist";
import theme from "styles/theme";

const ReviewDescription = ({ data }) => {
  const [addReview, setAddreview] = useState(false);
  const timeGap = getTimeGap(data.regTime);
  const defaultData = {
    boardId: data.boardId,
    parentReviewId: data.reviewId,
  };
  const toogleAddReivew = () => setAddreview((cur) => !cur);

  return (
    <FlexBox column>
      <Text fontSize="15px" lineHeight={1.4} whiteSpace="pre-wrap">
        {data.content}
      </Text>
      <FlexBox flexAlign="center" marginTop="10px" gap="10px">
        <Text
          fontSize="13px"
          color={theme.colors.dark}
          fontWeight={500}
        >{`${timeGap} 전`}</Text>
        {data.parentReviewId === null && (
          <Button onClick={toogleAddReivew}>댓글 달기</Button>
        )}
      </FlexBox>
      {addReview && (
        <Box height="100px" marginTop="10px">
          <ReviewRegist state={defaultData} />
        </Box>
      )}
    </FlexBox>
  );
};
export default ReviewDescription;
