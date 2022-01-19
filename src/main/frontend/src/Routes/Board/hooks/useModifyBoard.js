import { useNavigate } from "react-router-dom";

export const useModifyBoard = () => {
  const navigate = useNavigate();

  const moveToModifyPage = (data) =>
    navigate(`/regist/board`, { state: { ...data } });

  return { moveToModifyPage };
};
