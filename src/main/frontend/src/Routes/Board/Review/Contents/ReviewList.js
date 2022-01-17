import React from "react";
import { Box, HorizontalDivider, Text } from "Components/Universal";
import ReviewRegist from "Routes/Regist/ReviewRegist";
import Loader from "Components/Loading/Loader";
import { useFetchReviewByBoardId } from "../hooks/useFetchReviewByBoardId";
import Review from "./Review";

const ReviewList = ({ boardId }) => {
  const { loading, reviews } = useFetchReviewByBoardId(boardId);
  const defaultData = { boardId };
  return loading ? (
    <Loader />
  ) : (
    <>
      <Box height="100px" marginTop="10px">
        <ReviewRegist state={defaultData} />
      </Box>
      <HorizontalDivider marginTop="24px" marginBottom="24px" />
      <Box fullSize borderRadius="10px">
        <Box marginBottom="30px">
          <Text fontSize="17px" fontWeight={600}>
            {`댓글 ${reviews.length}`}
          </Text>
        </Box>
        {reviews.map((review) => (
          <Box key={review.reviewId}>
            <Review data={review} />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default ReviewList;
