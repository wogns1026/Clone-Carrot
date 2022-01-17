import React from "react";
import Loader from "Components/Loading/Loader";
import { Box, RegularGrid } from "Components/Universal";
import Article from "./Article";
import { useFilterArticle } from "../hooks/useFilterArticle";

const ArticleList = ({ gridSize = "210px", gridGap = "56px" }) => {
  let { loading, filteredArticle } = useFilterArticle();
  console.log(filteredArticle);
  return loading ? (
    <Loader />
  ) : (
    <Box width="100%">
      <RegularGrid gridSize={gridSize} gridGap={gridGap}>
        {filteredArticle.map(({ itemId, ...rest }) => (
          <Article key={itemId} itemId={itemId} {...rest} />
        ))}
      </RegularGrid>
    </Box>
  );
};

export default ArticleList;
