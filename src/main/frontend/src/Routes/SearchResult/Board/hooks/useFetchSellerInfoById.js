import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSellerInfoById } from "redux/modules/sellerInfo";

export const useFetchSellerInfoById = (userId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sellItem, setSellItem] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");
  const [buyReviews, setBuyReviews] = useState("");

  useEffect(() => fetch(), [userId]);

  const fetch = () => {
    if (!userId) return;

    dispatch(fetchSellerInfoById(userId))
      .unwrap()
      .then(({ buyReviews, sellItem, sellerInfo }) => {
        setBuyReviews(buyReviews);
        setSellItem(sellItem);
        setSellerInfo(sellerInfo);
        setLoading(false);
      })
      .catch((err) => {
        navigate(`/`);
        alert("해당 페이지를 찾을 수 없습니다.");
      });
  };
  return { loading, sellItem, sellerInfo, buyReviews };
};
