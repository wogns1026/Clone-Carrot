import React, { useState, useEffect } from "react";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import TradeArticle from "./TradeArticle";
import { Box, RegularGrid } from "Components/Universal";
import { HotArticleAPI } from "api";

const TradeArticleList = ({ filter, gridSize = "210px", gridGap = "56px" }) => {
  let { loading, data, error } = HotArticleAPI();
  const [state, setState] = useState([]);

  useEffect(() => {
    if (data) setState(data.data);
  }, [data]);

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
