import React from "react";
import { useParams } from "react-router-dom";
import BoardDescription from "./BoardDescription";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import HotArticleList from "Routes/ArticleDetail/HotArticleList";
import Profile from "Components/Profile/Profile";
import ReviewList from "./Review/ReviewList";
import {
  Box,
  ContentContainer,
  FlexBox,
  HorizontalDivider,
} from "Components/Universal";
import { boardApi } from "api";
import theme from "Style/theme";

const Board = () => {
  const { id } = useParams();
  let { loading, data, error } = boardApi.GetBoard(id);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer column width={theme.size.window.board}>
      <Box fullSize>
        <Profile id={data.content?.userId} />
        <HorizontalDivider marginBottom="50px" />
        <FlexBox column>
          <BoardDescription {...data.content} />
          <HorizontalDivider marginBottom="24px" />
          <ReviewList reviewList={data.reviewList} />
          <HotArticleList />
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default Board;
