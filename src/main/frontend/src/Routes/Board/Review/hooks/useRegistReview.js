import { useDispatch } from "react-redux";
import { fetchReviewByBoardId, registReview } from "redux/modules/review";
import { toast } from "react-toastify";

export const useRegistReview = () => {
  const dispatch = useDispatch();

  const regist = (reviewData) => {
    reviewData &&
      dispatch(registReview(reviewData))
        .unwrap()
        .then((res) => {
          dispatch(fetchReviewByBoardId(reviewData.boardId));
          toast.success("댓글 등록 성공");
        })
        .catch((err) => toast.error("댓글 등록 실패"));
  };
  return { regist };
};
