import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewByBoardId, reviewSelector } from "redux/modules/review";

export const useFetchReviewByBoardId = (boardId) => {
  const dispatch = useDispatch();
  const reviews = useSelector(reviewSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => fetch(), [boardId]);
  useEffect(() => reviews && setLoading(false), [reviews]);

  const fetch = () => boardId && dispatch(fetchReviewByBoardId(boardId));
  return { loading, reviews };
};
