import React from "react";
import ContentContainer from "Components/Content/ContentContainer";
import TradeArticleList from "./Article/TradeArticleList";
import BoardPreviewList from "./Board/BoardPreviewList";
import theme from "Style/theme";

const SearchResult = () => {
  return (
    <ContentContainer
      bgColor={theme.colors.lightGrey}
      direction="column"
      width="800px"
      height="100%"
    >
      <TradeArticleList />
      <BoardPreviewList />
    </ContentContainer>
  );
};
export default SearchResult;
