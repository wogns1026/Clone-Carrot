import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerInfoById, sellersSelector } from "redux/modules/sellerInfo";

export const useFetchSellerInfoById = (id) => {
  const dispatch = useDispatch();

  const sellers = useSelector(sellersSelector);
  const [loading, setLoading] = useState(true);
  const [sellItem, setSellItem] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");
  const [buyReviews, setBuyReviews] = useState("");

  useEffect(() => {
    if (sellers) {
      setSellItem(sellers.find((info) => info.sellerInfo.userId === id));
      setLoading(false);
    }
  }, [sellers]);
  useEffect(() => fetch(), [id]);
  const fetch = () => {
    if (id) {
      dispatch(fetchSellerInfoById(id))
        .unwrap()
        .then(({ buyReviews, sellItem, sellerInfo }) => {
          setBuyReviews(buyReviews);
          setSellItem(sellItem);
          setSellerInfo(sellerInfo);
        });
    }
  };
  return { loading, sellItem, sellerInfo, buyReviews };
};
