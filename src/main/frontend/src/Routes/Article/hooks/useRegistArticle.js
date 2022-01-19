import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registArticle } from "redux/modules/article";

export const useRegistArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regist = (articleData) => {
    if (articleData) {
      dispatch(registArticle(articleData))
        .unwrap()
        .then((itemId) => {
          if (itemId) navigate(`/articles/${itemId}`);
        });
    }
  };
  return { regist };
};
