import React from "react";
import { Box, FlexBox, HorizontalDivider, Text } from "Components/Universal";
import ReviewContent from "./ReviewContent";

const Review = ({ data }) => {
  return (
    <>
      <ReviewContent data={data} />
      <HorizontalDivider marginTop="20px" marginBottom="20px" />

      {data.childReviews?.map((childData) => (
        <Box key={childData.reviewId}>
          <FlexBox>
            <Text marginRight="12px">ㄴ</Text>
            <ReviewContent data={childData} />
          </FlexBox>
          <HorizontalDivider marginTop="20px" marginBottom="20px" />
        </Box>
      ))}
    </>
  );
};
export default Review;
