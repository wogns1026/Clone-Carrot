import React from "react";
import Article from "Components/Article/Article";
import { Box, RegularGrid } from "Components/Universal";

const SellerArticleList = ({ dataArr: sellItem }) => {
  return (
    <Box width="100%" marginTop="40px">
      <RegularGrid gridSize="207px" gridGap="30px">
        {sellItem.map(({ itemId, ...rest }) => (
          <Article key={itemId} itemId={itemId} height="207px" {...rest} />
        ))}
      </RegularGrid>
    </Box>
  );
};
export default SellerArticleList;
