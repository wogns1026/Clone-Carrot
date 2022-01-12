import React from "react";
import Review from "./Review";
import { Box, HorizontalDivider, Text } from "Components/Universal";
import { reviewApi } from "api";
import ReviewRegist from "Routes/Regist/ReviewRegist";

const rootReviews = (reviews) =>
  reviews.filter((d) => d.parentReviewId === null);

const ReviewList = ({ boardId, reviewList, refetch }) => {
  const regist = (data) => {
    reviewApi
      .RegistReview(data)
      .then((data) => {
        if (data.data.status === "success") refetch();
      })
      .catch((error) => console.log(error));
  };

  const deleteReview = (reviewId) => {
    reviewApi
      .DeleteReview(reviewId)
      .then((data) => {
        if (data?.data?.status === "success") refetch();
      })
      .catch((error) => console.log(error));
  };
  const childReviews = (reviews, rootId) =>
    reviews.filter((d) => d.parentReviewId === rootId);

  const getReviews = rootReviews(reviewList).map((rootData) => (
    <Box key={rootData.reviewId}>
      <Review
        data={rootData}
        childReviews={childReviews(reviewList, rootData.reviewId)} // 수정 예정
        regist={regist}
        remove={deleteReview}
      />
    </Box>
  ));
  return (
    <>
      <Box height="100px" marginTop="10px">
        <ReviewRegist
          state={{ boardId, parentReviewId: null }}
          regist={regist}
        />
      </Box>

      <HorizontalDivider marginTop="24px" marginBottom="24px" />

      <Box fullSize borderRadius="10px">
        <Box marginBottom="30px">
          <Text fontSize="17px" fontWeight={600}>
            {`댓글 ${reviewList.length}`}
          </Text>
        </Box>
        {getReviews}
      </Box>
    </>
  );
};
export default ReviewList;
