import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardByIdSelector, fetchBoardById } from "redux/modules/board";

export const useFetchBoardById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(boardByIdSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => fetch(), [id]);
  useEffect(() => board && setLoading(false), [board]);

  const fetch = () => dispatch(fetchBoardById(id));
  return { loading, board, fetch };
};
