import React from "react";
import { Box, HorizontalDivider } from "Components/Universal";
import SellerReviewProfile from "./SellerReviewProfile";
import SellerReviewDescription from "./SellerReviewDescription";
import { getTimeGap } from "utils/time";

const SellerReview = ({ buyReviews }) => {
  return buyReviews?.map(({ userId, image, content, regTime }) => {
    const timeGap = getTimeGap(regTime);
    return (
      <Box fullSize key={userId}>
        <Box>
          <SellerReviewProfile userId={userId} image={image} />
          <SellerReviewDescription content={content} timeGap={timeGap} />
        </Box>
        <HorizontalDivider marginTop="20px" marginBottom="20px" />
      </Box>
    );
  });
};
export default SellerReview;
