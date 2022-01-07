import React from "react";
import TradeArticleList from "Components/Article/TradeArticleList";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";

const HotTradeSmallList = () => {
  return (
    <>
      <Box verticalMargin="35px">
        <FlexBox spaceBetween>
          <Text fontSize="18px" fontWeight={800}>
            당근마켓 인기중고
          </Text>
          <Text to="/hot-articles" color={`${theme.colors.carrot}`}>
            더 구경하기
          </Text>
        </FlexBox>
      </Box>
      <TradeArticleList gridSize="200px" gridGap="30px" size={6} />
    </>
  );
};
export default HotTradeSmallList;
