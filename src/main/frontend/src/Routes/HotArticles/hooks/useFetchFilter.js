import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, resetFilter, setFilter } from "redux/modules/article";

export const useFetchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const changeFilter = (payload) => dispatch(setFilter(payload));
  const reset = (payload) => dispatch(resetFilter(payload));

  useEffect(() => reset(), []);
  return { filter, changeFilter };
};
