import React from "react";
import BoardDescription from "./Contents/BoardDescription";
import Loader from "Components/Loading/Loader";
import HotArticleList from "Routes/Article/Contents/HotArticleList";
import ReviewList from "./Review/Contents/ReviewList";
import Profile from "Components/Profile/Profile";
import {
  Box,
  ContentContainer,
  FlexBox,
  HorizontalDivider,
  ImageSwiper,
} from "Components/Universal";
import theme from "styles/theme";
import { useFetchBoardById } from "./hooks/useFetchBoardById";

const Board = () => {
  const { loading, board } = useFetchBoardById();

  return loading ? (
    <Loader />
  ) : (
    <ContentContainer column width={theme.size.window.board}>
      <Box fullSize>
        <ImageSwiper imageList={board.image} />
        <Profile id={board.userId} />
        <HorizontalDivider marginBottom="24px" />
        <FlexBox column>
          <BoardDescription data={board} />
          <ReviewList boardId={board.boardId} />
          <HotArticleList />
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default Board;
