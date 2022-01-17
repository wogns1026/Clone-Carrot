import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteBoardById } from "redux/modules/board";

export const useDeleteBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const deleteBoard = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      dispatch(deleteBoardById(id))
        .unwrap()
        .then((res) => {
          if (res) navigate(`/`);
          toast.success("게시물 삭제 성공");
        })
        .catch((err) => toast.error("게시물 삭제 실패"));
    }
  };

  return { deleteBoard };
};
