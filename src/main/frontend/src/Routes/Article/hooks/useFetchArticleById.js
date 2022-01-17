import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticleById } from "redux/modules/article";

export const useFetchArticleById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => fetch(), [id]);
  useEffect(() => article && setLoading(false), [article]);

  const fetch = () => {
    dispatch(fetchArticleById(id))
      .unwrap()
      .then((res) => setArticle(res))
      .catch((err) => {
        navigate(`/`);
        alert("해당 페이지를 찾을 수 없습니다.");
      });
  };

  return { loading, article };
};
