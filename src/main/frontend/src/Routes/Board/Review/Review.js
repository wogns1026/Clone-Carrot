import React from "react";
import { Box, HorizontalDivider } from "Components/Universal";
import ReviewDescription from "./ReviewDescription";
import ReviewProfile from "./ReviewProfile";

const Review = ({
  boardId,
  userId,
  image,
  name,
  location,
  Review,
  itemRegTime,
}) => {
  return (
    <Box>
      <ReviewProfile id={userId} src={image} name={name} location={location} />
      <ReviewDescription description={Review} itemRegTime={itemRegTime} />
    </Box>
  );
};
export default Review;
