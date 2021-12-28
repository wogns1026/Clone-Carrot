import React from "react";
import ContentContainer from "Components/Content/ContentContainer";
import TradeArticleList from "Components/Article/TradeArticleList";
import { Text, Box } from "Components/Universal";
import theme from "Style/theme";

const HotTradeList = () => {
  return (
    <ContentContainer
      bgColor={theme.colors.white}
      direction="column"
      height="100%"
    >
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
