import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { articleByIdSelector } from "redux/modules/article";

export const useModifyArticle = () => {
  const navigate = useNavigate();

  const article = useSelector(articleByIdSelector);

  const moveToModifyPage = () => {
    navigate(`/regist/article`, { state: { ...article } });
  };

  return { moveToModifyPage };
};
