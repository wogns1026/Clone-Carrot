import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBoardById } from "redux/modules/board";

export const useFetchBoardById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [board, setBoard] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => fetch(), [id]);
  useEffect(() => board && setLoading(false), [board]);

  const fetch = () => {
    dispatch(fetchBoardById(id))
      .unwrap()
      .then((res) => setBoard(res))
      .catch(() => {
        navigate(`/`);
        alert("해당 페이지를 찾을 수 없습니다.");
      });
  };

  return { loading, board, fetch };
};
