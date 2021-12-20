import { useState, useEffect } from "react";
import { throttle } from "lodash";

const THROTTLE_WAIT = 300;

export default function useInfiniteScroll(fetchCallback, setNextPage, offset) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScrollThrottle = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - offset
    ) {
      setIsFetching(true);
    }
  }, THROTTLE_WAIT);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollThrottle);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottle);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchCallback();
    setNextPage();
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
