import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteArticleById } from "redux/modules/article";

export const useDeleteArticle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const deleteBoard = () => {
    id &&
      dispatch(deleteArticleById(id))
        .unwrap()
        .then((res) => {
          if (res.data.deleteCount) navigate(`/`);
          toast.success("매물 등록 성공");
        })
        .catch((err) => toast.error("매물 등록 실패"));
  };

  return { deleteBoard };
};
