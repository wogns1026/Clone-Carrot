import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registBoard } from "redux/modules/board";

export const useRegistBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regist = (data, imgFile) => {
    if (data && imgFile) {
      console.log(data, imgFile);
      dispatch(registBoard({ data, imgFile }))
        .unwrap()
        .then((boardId) => {
          if (boardId) navigate(`/board/${boardId}`);
        });
    }
  };
  return { regist };
};
