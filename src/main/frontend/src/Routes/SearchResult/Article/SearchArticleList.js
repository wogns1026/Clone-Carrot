import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, RegularGrid, SeeMoreContainer } from "Components/Universal";
import Article from "Components/Article/Article";
import Message from "Components/Loading/Message";
import Loader from "Components/Loading/Loader";
import { articleApi } from "api";

const ArticleList = ({ size }) => {
  const { id } = useParams();
  const [articles, setArticles] = useState();
  let { loading, data, error, morefetch, refetch } = articleApi.Search({
    id,
    size,
  });

  useEffect(() => {
    if (articles) {
      setArticles([]);
      refetch();
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (articles) setArticles([...articles, ...data.content]);
      else setArticles(data.content);
    }
  }, [data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
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
