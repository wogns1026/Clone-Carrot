import React from "react";
import ArticleList from "Components/Article/ArticleList";
import { Text, Box, ContentContainer } from "Components/Universal";
import theme from "Style/theme";

const HotArticleList = () => {
  return (
    <ContentContainer width={theme.size.window.home} column>
      <Box marginTop="129px" marginBottom="87px">
        <Text fontSize="40px" fontWeight={600}>
          중고거래 인기매물
        </Text>
      </Box>
      <ArticleList size={16} />
      <Box marginBottom="185px">
        <Text to="/hot-articles" fontSize="16px" fontWeight={600} underline>
          인기매물 더 보기
        </Text>
      </Box>
    </ContentContainer>
  );
};
export default HotArticleList;
