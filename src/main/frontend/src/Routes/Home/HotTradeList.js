import React from "react";
import TradeArticleList from "Components/Poster/TradeArticleList";
import ContentContainer from "Components/Content/ContentContainer";
import { Text, Box } from "Components/Universal";

const HotTradeList = () => {
  return (
    <ContentContainer bgColor="#f8f9fa" direction="column" height="100%">
      <Box marginTop="129px" marginBottom="87px">
        <Text fontSize="40px" fontWeight={600}>
          중고거래 인기매물
        </Text>
      </Box>
      <TradeArticleList />
      <Box marginBottom="185px">
        <Text to="/hot-articles" fontSize="16px" fontWeight={600} underline>
          인기매물 더 보기
        </Text>
      </Box>
    </ContentContainer>
  );
};
export default HotTradeList;
