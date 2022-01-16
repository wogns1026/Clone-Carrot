import React from "react";
import SearchArticleList from "./Article/SearchArticleList";
import BoardPreviewList from "./Board/BoardPreviewList";
import theme from "Style/theme";
import { ContentContainer } from "Components/Universal";

const SearchResult = () => {
  return (
    <ContentContainer
      bgColor={theme.colors.lightGrey}
      column
      width={theme.size.window.searchResult}
    >
      <SearchArticleList size={6} />
      <BoardPreviewList size={6} />
    </ContentContainer>
  );
};
export default SearchResult;
