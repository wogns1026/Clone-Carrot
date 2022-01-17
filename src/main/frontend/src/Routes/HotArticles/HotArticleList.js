import React from "react";
import LocationFilter from "./LocationFilter";
import ArticleList from "Routes/Article/Contents/ArticleList";
import { ContentContainer, Text } from "Components/Universal";
import theme from "styles/theme";

const HotArticleList = () => {
  return (
    <ContentContainer column width={theme.size.window.hotArticles}>
      <Text
        fontSize="31.5px"
        fontWeight={600}
        marginTop="56px"
        marginBottom="45px"
      >
        중고거래 인기매물
      </Text>
      <LocationFilter />
      <ArticleList gridSize="201px" gridGap="50px" size={100} />
    </ContentContainer>
  );
};

export default HotArticleList;
