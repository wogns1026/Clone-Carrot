import React from "react";
import ReviewDescription from "./ReviewDescription";
import ReviewProfile from "./ReviewProfile";
import { Box } from "Components/Universal";

const Review = ({ userId, image, content, regTime }) => {
  return (
    <Box>
      <ReviewProfile userId={userId} src={image} />
      <ReviewDescription description={content} itemRegTime={regTime} />
    </Box>
  );
};
export default Review;
