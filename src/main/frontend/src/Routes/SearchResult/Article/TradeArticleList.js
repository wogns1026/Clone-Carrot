import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, RegularGrid } from "Components/Universal";
import SeeMoreContianer from "../SeeMoreContainer";
import TradeArticle from "./TradeArticle";
import theme from "Style/theme";
import { articleApi } from "api";
import Message from "Components/Loading/Message";

const TradeArticleList = ({ size }) => {
  const { id } = useParams();
  const [articles, setArticles] = useState();
  let { loading, data, error, moreFetch } = articleApi.Search({
    id,
    size,
  });

  useEffect(() => {
    if (articles) moreFetch();
  }, [id]);

  useEffect(() => {
    if (data) {
      if (articles) setArticles([...articles, ...data.content]);
      else setArticles(data.content);
    }
  }, [data]);

  return error ? (
    <Message text={error} />
  ) : (
    !loading && (
      <Box fullSize marginTop="32px">
        <SeeMoreContianer
          title="중고거래"
          bgColor={theme.colors.white}
          onClicked={moreFetch}
        >
          <Box width="100%">
            <RegularGrid gridSize="215px" gridGap="35px">
              {articles?.map(({ itemId, ...rest }) => (
                <TradeArticle key={itemId} itemId={itemId} {...rest} />
              ))}
            </RegularGrid>
          </Box>
        </SeeMoreContianer>
      </Box>
    )
  );
};
export default TradeArticleList;
