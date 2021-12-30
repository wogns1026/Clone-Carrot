import React from "react";
import { Box, FlexBox, HorizontalDivider, Text } from "Components/Universal";
import Review from "./Review";
import { getReviewData } from "api";

const ReviewList = ({ boardId }) => {
  const reviewData = getReviewData();
  const rootReviews = () =>
    reviewData.filter((d) => d.reviewId === d.parentReviewId);
  const childReviews = (rootData) =>
    reviewData.filter(
      (d) =>
        d.parentReviewId !== d.reviewId &&
        d.parentReviewId === rootData.reviewId
    );

  const getReviews = rootReviews().map((rootData) => (
    <Box>
      <Review {...rootData} />
      <HorizontalDivider marginTop="20px" marginBottom="20px" />
      {childReviews(rootData).map((childData) => (
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
          {`댓글 ${reviewData.length}`}
        </Text>
      </Box>
      {getReviews}
    </Box>
  );
};
export default ReviewList;
