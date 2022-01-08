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
      <TradeArticleList size={6} />
      <BoardPreviewList size={6} />
    </ContentContainer>
  );
};
export default SearchResult;
