import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registBoard } from "redux/modules/board";

export const useRegistBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regist = (boardData) => {
    if (boardData) {
      dispatch(registBoard(boardData))
        .unwrap()
        .then((boardId) => {
          if (boardId) navigate(`/board/${boardId}`);
        });
    }
  };
  return { regist };
};
