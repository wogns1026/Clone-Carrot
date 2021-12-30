import React from "react";
import TradeArticle from "Components/Article/TradeArticle";
import { Box, RegularGrid } from "Components/Universal";

const SellerTrade = ({ dataArr: sellItem }) => {
  return (
    <Box width="100%" marginTop="40px">
      <RegularGrid gridSize="207px" gridGap="30px">
        {sellItem.map(({ itemId, ...rest }) => (
          <TradeArticle key={itemId} itemId={itemId} height="207px" {...rest} />
        ))}
      </RegularGrid>
    </Box>
  );
};
export default SellerTrade;
