import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  articleSelector,
  fetchArticle,
  filteredArticleSelector,
} from "redux/modules/article";

export const useFilterArticle = () => {
  const dispatch = useDispatch();
  const filteredArticle = useSelector(filteredArticleSelector);
  const articles = useSelector(articleSelector);
  const [loading, setLoading] = useState(true);
  const fetch = () => articles.length === 0 && dispatch(fetchArticle());
  useEffect(() => fetch(), []);
  useEffect(() => filteredArticle && setLoading(false), [filteredArticle]);

  return { loading, filteredArticle };
};
