import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
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
        setState({ ...state, loading, data });
      })
      .catch((error) => {
        setState({ ...state, loading, error });
      });
    console.log(state);
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
