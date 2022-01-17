import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { boardByIdSelector } from "redux/modules/board";

export const useModifyBoard = () => {
  const navigate = useNavigate();
  const board = useSelector(boardByIdSelector);

  const moveToModifyPage = () => {
    navigate(`/regist/board`, { state: { ...board } });
  };

  return { moveToModifyPage };
};
