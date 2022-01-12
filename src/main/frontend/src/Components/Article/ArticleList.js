import React from "react";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import Article from "./Article";
import { Box, RegularGrid } from "Components/Universal";
import { articleApi } from "api";

const ArticleList = ({
  filter,
  gridSize = "210px",
  gridGap = "56px",
  size,
}) => {
  let { loading, data, error } = articleApi.GetHotArticles({ size });
  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box width="100%">
      <RegularGrid gridSize={gridSize} gridGap={gridGap}>
        {filter
          ? filter(data.content).map(({ itemId, ...rest }) => (
              <Article key={itemId} itemId={itemId} {...rest} />
            ))
          : data.content.map(({ itemId, ...rest }) => (
              <Article key={itemId} itemId={itemId} {...rest} />
            ))}
      </RegularGrid>
    </Box>
  );
};
export default ArticleList;
