import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  opts.baseURL = "http://localhost:8080/api/v1";
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (!opts.url) return;
    opts.params = { ...opts.params, page };
    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data: data.data });
        if ("last" in data.data) setIsLastPage(data.data.last);
      })
      .catch((error) => setState({ ...state, loading: false, error }));
  }, [trigger]);

  const morefetch = () => {
    if (!isLastPage) {
      setState({ ...state, loading: true });
      setPage(page + 1);
      setTrigger(new Date());
    }
  };
  const refetch = () => {
    setState({ ...state, loading: true });
    setPage(0);
    setTrigger(new Date());
  };
  if (!opts.url) return;
  return { ...state, morefetch, refetch };
};