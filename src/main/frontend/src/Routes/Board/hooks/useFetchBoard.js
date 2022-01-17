import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSelector, fetchBoard } from "redux/modules/board";

export const useFetchBoard = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardSelector());
  const [loading, setLoading] = useState(true);

  const fetch = () => !boards && dispatch(fetchBoard());

  useEffect(() => fetch(), []);
  useEffect(() => boards && setLoading(false), [boards]);

  return { loading, boards, fetch };
};
