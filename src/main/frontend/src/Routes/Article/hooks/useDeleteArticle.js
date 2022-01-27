import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteArticleById } from "redux/modules/article";

export const useDeleteArticle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const deleteArticle = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      dispatch(deleteArticleById(id))
        .unwrap()
        .then((res) => {
          if (res) navigate(`/`);
          toast.success("매물 삭제 성공");
        })
        .catch((err) => toast.error("매물 삭제 실패"));
    }
  };

  return { deleteArticle };
};
