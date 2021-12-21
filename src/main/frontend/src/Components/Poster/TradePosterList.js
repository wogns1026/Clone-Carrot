import React, { useEffect, useState } from "react";
import TradePoster from "./TradePoster";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { RegularGrid } from "Components/Universal/Grid";
import { Box } from "Components/Universal";
import { useAxios } from "Hooks/useAxios";

const TradePosterList = ({ filter, gridSize = "210px", gridGap = "56px" }) => {
  const [state, setState] = useState([]);
  let { loading, data, error, refetch } = useAxios({
    url: "/hot-articles",
  });

  useEffect(() => {
    if (data) {
      const newData = data.reduce((acc, cur) => {
        acc.push({ ...cur, location: "경기도 화성시" });
        return acc;
      }, []);
      setState(newData);
      console.log(newData);
    }
  }, [loading]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box width="100%" horizontalMargin="6px">
      <RegularGrid gridSize={gridSize} gridGap={gridGap}>
        {filter
          ? filter(state).map(({ itemId, ...rest }) => (
              <TradePoster key={itemId} itemId={itemId} {...rest} />
            ))
          : state.map(({ itemId, ...rest }) => (
              <TradePoster key={itemId} itemId={itemId} {...rest} />
            ))}
      </RegularGrid>
    </Box>
  );
};
export default TradePosterList;
