import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, RegularGrid } from "Components/Universal";
import SeeMoreContainer from "../SeeMoreContainer";
import TradeArticle from "./TradeArticle";
import { articleApi } from "api";
import Message from "Components/Loading/Message";
import Loader from "Components/Loading/Loader";

const TradeArticleList = ({ size }) => {
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
              <TradeArticle key={itemId} itemId={itemId} {...rest} />
            ))}
          </RegularGrid>
        </Box>
      </SeeMoreContainer>
    </Box>
  );
};
export default TradeArticleList;
