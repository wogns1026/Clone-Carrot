import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { articleByIdSelector, fetchArticleById } from "redux/modules/article";

export const useFetchArticleById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(articleByIdSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => fetch(), [id]);
  useEffect(() => article && setLoading(false), [article]);
  const fetch = () => dispatch(fetchArticleById(id));
  return { loading, article };
};
