import { useDispatch } from "react-redux";
import { fetchReviewByBoardId, modifyReview } from "redux/modules/review";
import { toast } from "react-toastify";

export const useModifyReview = () => {
  const dispatch = useDispatch();

  const modify = (reviewData) => {
    reviewData &&
      dispatch(modifyReview(reviewData))
        .unwrap()
        .then((res) => {
          dispatch(fetchReviewByBoardId(reviewData.boardId));
          toast.success("댓글 수정 성공");
        })
        .catch((err) => toast.error("댓글 수정 실패"));
  };
  return { modify };
};
