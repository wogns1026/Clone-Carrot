import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  nextPage,
  resetPage,
  searchArticlePageSelector,
} from "redux/modules/search";
import { searchArticleByKeyword } from "redux/modules/search";

export const useSearchArticleByKeyword = (size) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector(searchArticlePageSelector);

  const [loading, setLoading] = useState(true);
  const fetch = () => id && dispatch(searchArticleByKeyword(id));
  const morefetch = () => dispatch(nextPage());

  useEffect(() => {
    dispatch(resetPage());
    fetch();
  }, [id]);
  useEffect(() => articles && setLoading(false), [articles]);

  return { loading, articles, morefetch };
};
