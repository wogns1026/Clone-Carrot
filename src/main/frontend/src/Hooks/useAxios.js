import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  opts.baseURL = "http://localhost:8080/api/v1";
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (!opts.url) {
      return;
    }
    const loading = { loading: false };
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data: data.data.content,
        });
      })
      .catch((error) => {
        setState({ ...state, loading, error });
      });
  }, [trigger]);

  const refetch = () => {
    const loading = { loading: true };
    setState({
      ...state,
      loading,
    });
    setTrigger(Date.now());
  };

  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};
