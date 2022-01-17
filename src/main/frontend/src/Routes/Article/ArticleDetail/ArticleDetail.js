import React from "react";
import HotArticleList from "../Contents/HotArticleList";
import ArticleDescription from "./ArticleDescription";
import Loader from "Components/Loading/Loader";
import Profile from "Components/Profile/Profile";
import {
  Box,
  ContentContainer,
  FlexBox,
  HorizontalDivider,
  ImageSwiper,
} from "Components/Universal";
import theme from "styles/theme";
import { useFetchArticleById } from "../hooks/useFetchArticleById";

const ArticleDetail = () => {
  const { loading, article } = useFetchArticleById();

  return loading ? (
    <Loader />
  ) : (
    <ContentContainer column width={theme.size.window.articleDetail}>
      <Box fullSize marginTop="30px">
        <ImageSwiper imageList={[article.image]} />
        <Profile id={article.sellerId} />
        <HorizontalDivider marginBottom="38px" />
        <FlexBox column>
          <ArticleDescription data={article} />
        </FlexBox>
        <HorizontalDivider />
        <HotArticleList />
      </Box>
    </ContentContainer>
  );
};
export default ArticleDetail;
