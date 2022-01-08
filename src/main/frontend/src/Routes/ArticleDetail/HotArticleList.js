import React from "react";
import ArticleList from "Components/Article/ArticleList";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";

const HotArticleList = () => {
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
      <ArticleList gridSize="200px" gridGap="30px" size={6} />
    </>
  );
};
export default HotArticleList;
