import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  buyReviewsSelector,
  buyReviewsWithSellerInfoSelector,
  fetchSellerInfoById,
  fetchSellerInfoOfReview,
  sellerInfoSelector,
  sellItemSelector,
} from "redux/modules/sellerInfo";

export const useFetchSellerInfoOfReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sellItem = useSelector(sellItemSelector);
  const sellerInfo = useSelector(sellerInfoSelector);
  const buyReviews = useSelector(buyReviewsSelector);
  const buyReviewsWithSellerInfo = useSelector(
    buyReviewsWithSellerInfoSelector
  );
  const [loading, setLoading] = useState(true);

  const fetch = () => id && dispatch(fetchSellerInfoById(id));
  const fetchReviewsWithSellerInfo = () =>
    buyReviews.forEach(({ userId }) =>
      dispatch(fetchSellerInfoOfReview(userId))
    );

  useEffect(() => fetch(), [id]);
  useEffect(() => fetchReviewsWithSellerInfo(), [buyReviews]);

  useEffect(() => {
    if (
      sellItem &&
      sellerInfo &&
      buyReviews &&
      buyReviewsWithSellerInfo.length > 0 &&
      "userName" in buyReviewsWithSellerInfo.at(-1)
    ) {
      setLoading(false);
    }
  }, [buyReviewsWithSellerInfo]);

  return { loading, sellItem, sellerInfo, buyReviewsWithSellerInfo };
};
