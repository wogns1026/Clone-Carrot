import React from "react";
import { useParams } from "react-router-dom";
import HotArticleList from "./HotArticleList";
import ArticleDescription from "./ArticleDescription";
import ArticleDetailInfo from "./ArticleDetailInfo";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import Profile from "Components/Profile/Profile";
import {
  Box,
  ContentContainer,
  FlexBox,
  HorizontalDivider,
  ImageSwiper,
} from "Components/Universal";
import { articleApi } from "api";
import theme from "Style/theme";

const ArticleDetail = () => {
  const { id } = useParams();
  let { loading, data, error } = articleApi.GetArticle(id);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer column width={theme.size.window.articleDetail}>
      <Box fullSize marginTop="30px">
        <ImageSwiper imageList={[data.data.image]} />
        <Profile id={data.data.sellerId ? data.data.sellerId : 1} />
        <HorizontalDivider marginBottom="38px" />
        <FlexBox column>
          <ArticleDetailInfo {...data.data} />
          <ArticleDescription {...data.data} />
        </FlexBox>
        <HorizontalDivider />
        <HotArticleList />
      </Box>
    </ContentContainer>
  );
};
export default ArticleDetail;
