import React from "react";
import ReviewDescription from "./ReviewDescription";
import ReviewProfile from "./ReviewProfile";
import { Box } from "Components/Universal";

const Review = (data) => {
  const { userId, image, userName, address, content, regTime } = data;
  return (
    <Box>
      <ReviewProfile
        id={userId}
        src={image}
        name={userName}
        address={address}
      />
      <ReviewDescription description={content} itemRegTime={regTime} />
    </Box>
  );
};
export default Review;
