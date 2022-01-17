import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteReviewById, fetchReviewByBoardId } from "redux/modules/review";

export const useDeleteReviewByReviewId = () => {
  const dispatch = useDispatch();

  const deleteReview = (reviewId, boardId, parentReviewId) => {
    reviewId &&
      dispatch(deleteReviewById({ reviewId, parentReviewId }))
        .unwrap()
        .then((res) => {
          dispatch(fetchReviewByBoardId(boardId));
          toast.success("댓글 삭제 성공");
        })
        .catch((err) => toast.error("댓글 삭제 실패"));
  };
  return { deleteReview };
};
