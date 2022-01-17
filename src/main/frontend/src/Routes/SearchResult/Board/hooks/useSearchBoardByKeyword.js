import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  boardArticlePageSelector,
  fetchBoard,
  nextPage,
  resetPage,
} from "redux/modules/board";

export const useSearchBoardByKeyword = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(boardArticlePageSelector);
  const [loading, setLoading] = useState(true);
  const fetch = () => id && dispatch(fetchBoard(id));
  const morefetch = () => dispatch(nextPage());

  useEffect(() => {
    dispatch(resetPage());
    fetch();
  }, [id]);
  useEffect(() => boards && setLoading(false), [boards]);

  return { loading, boards, morefetch };
};
