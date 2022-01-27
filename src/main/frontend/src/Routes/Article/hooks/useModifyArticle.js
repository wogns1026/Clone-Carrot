import { useNavigate } from "react-router-dom";

export const useModifyArticle = () => {
  const navigate = useNavigate();

  const moveToModifyPage = (article) => {
    navigate(`/regist/article`, { state: { ...article } });
  };

  return { moveToModifyPage };
};
