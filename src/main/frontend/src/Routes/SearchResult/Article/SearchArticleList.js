import React from "react";
import { Box, RegularGrid, SeeMoreContainer } from "Components/Universal";
import Article from "Routes/Article/Contents/Article";
import Loader from "Components/Loading/Loader";
import { useSearchArticleByKeyword } from "./hooks/useSearchArticleByKeyword";

const ArticleList = ({ size }) => {
  const { loading, articles, morefetch } = useSearchArticleByKeyword(size);

  return loading ? (
    <Loader />
  ) : (
    <Box fullSize marginTop="32px">
      <SeeMoreContainer title="중고거래" onClicked={morefetch}>
        <Box width="100%">
          <RegularGrid gridSize="215px" gridGap="35px">
            {articles?.map(({ itemId, ...rest }) => (
              <Article key={itemId} itemId={itemId} {...rest} />
            ))}
          </RegularGrid>
        </Box>
      </SeeMoreContainer>
    </Box>
  );
};
export default ArticleList;
