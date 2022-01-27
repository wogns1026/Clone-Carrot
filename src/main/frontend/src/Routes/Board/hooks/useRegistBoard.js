import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registBoard, registBoardImage } from "redux/modules/board";

export const useRegistBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regist = (boardData, image) => {
    if (boardData) {
      dispatch(registBoard(boardData))
        .unwrap()
        .then((boardId) => {
          dispatch(registBoardImage({ boardId, image }))
            .unwrap()
            .then((res) => {
              console.log("이미지 등록 성공");
            });
          if (boardId) navigate(`/board/${boardId}`);
        });
    }
  };
  return { regist };
};
