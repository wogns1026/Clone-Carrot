import React, { useEffect, useState } from "react";
import TradeArticle from "./TradeArticle";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { useAxios } from "Hooks/useAxios";
import { Box, RegularGrid } from "Components/Universal";

const TradeArticleList = ({ filter, gridSize = "210px", gridGap = "56px" }) => {
  const [state, setState] = useState([]);
  let { loading, data, error } = useAxios({
    url: "/hot-articles",
  });

  useEffect(() => {
    if (data) {
      const newData = data.reduce((acc, cur) => {
        acc.push({ ...cur, location: "경기도 화성시" });
        return acc;
      }, []);
      setState(newData);
    }
  }, [loading, data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box width="100%">
      <RegularGrid gridSize={gridSize} gridGap={gridGap}>
        {filter
          ? filter(state).map(({ itemId, ...rest }) => (
              <TradeArticle key={itemId} itemId={itemId} {...rest} />
            ))
          : state.map(({ itemId, ...rest }) => (
              <TradeArticle key={itemId} itemId={itemId} {...rest} />
            ))}
      </RegularGrid>
    </Box>
  );
};
export default TradeArticleList;
