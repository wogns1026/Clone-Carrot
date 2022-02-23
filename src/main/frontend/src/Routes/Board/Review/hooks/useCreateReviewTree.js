import { useEffect, useState } from "react";

export const useCreateReviewTree = (reviewList) => {
  const [reviewTree, setReviewTree] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const rootReviews = reviewList.filter((d) => d.parentReviewId === null);
    setReviewTree(
      rootReviews.map((review) => {
        const childReviews = reviewList.filter(
          (d) => d.parentReviewId === review.reviewId
        );
        count += childReviews.length + 1;
        return { ...review, childReviews };
      })
    );
    setReviewCount(count);
  }, [reviewList]);

  return [reviewTree, reviewCount];
};
