import React from "react";
import SearchArticleList from "./Article/SearchArticleList";
import BoardPreviewList from "./Board/BoardPreviewList";
import theme from "styles/theme";
import { ContentContainer } from "Components/Universal";

const SearchResult = () => {
  return (
    <ContentContainer
      bgColor={theme.colors.lightGrey}
      column
      width={theme.size.window.searchResult}
    >
      <SearchArticleList />
      <BoardPreviewList />
    </ContentContainer>
  );
};
export default SearchResult;
