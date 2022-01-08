import React from "react";
import Review from "./Review";
import { Box, FlexBox, HorizontalDivider, Text } from "Components/Universal";

const ReviewList = ({ reviewList }) => {
  const rootReviews = reviewList.filter((d) => d.parentReviewId === null);
  const childReviews = (rootId) =>
    reviewList.filter((d) => d.parentReviewId === rootId);

  const getReviews = rootReviews.map((rootData) => (
    <Box>
      <Review {...rootData} />
      <HorizontalDivider marginTop="20px" marginBottom="20px" />
      {childReviews(rootData.reviewId).map((childData) => (
        <>
          <FlexBox>
            <Text marginRight="12px">ㄴ</Text>
            <Review {...childData} />
          </FlexBox>
          <HorizontalDivider marginTop="20px" marginBottom="20px" />
        </>
      ))}
    </Box>
  ));

  return (
    <Box fullSize borderRadius="10px">
      <Box marginBottom="30px">
        <Text fontSize="17px" fontWeight={600}>
          {`댓글 ${reviewList.length}`}
        </Text>
      </Box>
      {getReviews}
    </Box>
  );
};
export default ReviewList;
