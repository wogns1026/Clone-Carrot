import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBoardById } from "redux/modules/board";

export const useFetchBoardById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reviewList, setReviewList] = useState();
  const [imagePath, setImagePath] = useState();
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => fetch(), [id]);
  useEffect(() => content && setLoading(false), [content]);

  const fetch = () => {
    dispatch(fetchBoardById(id))
      .unwrap()
      .then((res) => {
        setReviewList(res.reviewList);
        setImagePath(res.imagePath);
        setContent(res.content);
      })
      .catch(() => {
        navigate(`/`);
        alert("해당 페이지를 찾을 수 없습니다.");
      });
  };

  return { loading, reviewList, imagePath, content, fetch };
};
