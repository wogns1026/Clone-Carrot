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
        .then((res) => {
          //* res 결과로 boardId를 받아오도록 수정
          if (res === "success") navigate(`/board/${1}`);
        });
    }
  };
  return { regist };
};
