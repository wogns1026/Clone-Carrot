import React, { useEffect, useState } from "react";
import { Box, HorizontalDivider } from "Components/Universal";
import Review from "Routes/Board/Review/Review";
import { userApi } from "api";

const SellerReview = ({ dataArr: buyReviews }) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const userDatas = buyReviews.map((review) => userApi.GetUser(review.userId));

  useEffect(() => {
    if (
      loading &&
      buyReviews.length === userDatas.filter((d) => !d.loading).length
    ) {
      const reviews = buyReviews.reduce(
        (acc, cur, index) => [
          ...acc,
          { ...cur, ...userDatas[index].data.sellerInfo },
        ],
        []
      );
      setState(reviews);
      setLoading(false);
    }
  }, [userDatas]);

  //* userId,userName,address,mannerTemper,retradeRate,review
  //* reviewId,sellerId,content,regTime
  return (
    !loading &&
    state?.map((review) => {
      return (
        <Box fullSize key={review.userId}>
          <Review {...review} />
          <HorizontalDivider marginTop="20px" marginBottom="20px" />
        </Box>
      );
    })
  );
};
export default SellerReview;
