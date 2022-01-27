import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSellerInfoById, sellersSelector } from "redux/modules/sellerInfo";

export const useFetchSellerInfoById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sellers = useSelector(sellersSelector);
  const [loading, setLoading] = useState(true);
  const [sellItem, setSellItem] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");
  const [buyReviews, setBuyReviews] = useState("");

  useEffect(() => {
    if (sellers) {
      setSellItem(sellers.find((info) => info.sellerInfo.userId === id));
    }
  }, [sellers]);

  useEffect(() => fetch(), [id]);

  const fetch = () => {
    if (!id) return;

    dispatch(fetchSellerInfoById(id))
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
