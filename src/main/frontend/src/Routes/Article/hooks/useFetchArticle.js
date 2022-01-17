import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleSelector, fetchArticle } from "redux/modules/article";

export const useFetchArticle = () => {
  const dispatch = useDispatch();
  const articles = useSelector(articleSelector());
  const [loading, setLoading] = useState(true);

  const fetch = () => articles.length === 0 && dispatch(fetchArticle());

  useEffect(() => fetch(), []);
  useEffect(() => articles && setLoading(false), [articles]);

  return { loading, articles };
};
