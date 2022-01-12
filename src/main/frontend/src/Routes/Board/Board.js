import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  ImageSwiper,
} from "Components/Universal";
import { boardApi } from "api";
import theme from "Style/theme";
import ReviewRegist from "Routes/Regist/ReviewRegist";

const Board = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let { loading, data, error, refetch } = boardApi.GetBoard(id);

  useEffect(() => refetch(), [id]);

  const deleteBoard = () => {
    boardApi
      .DeleteBoard(id)
      .then((data) => {
        if (data.data.deleteCount) navigate(`/`);
      })
      .catch((error) => console.log(error));
  };

  const modifyBoard = () => {
    navigate(`/regist/board`, { state: { ...data.content } });
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer column width={theme.size.window.board}>
      <Box fullSize>
        <ImageSwiper imageList={data.content?.image} />
        <Profile id={data.content?.userId} />
        <HorizontalDivider marginBottom="24px" />
        <FlexBox column>
          <BoardDescription
            {...data.content}
            modify={modifyBoard}
            remove={deleteBoard}
          />
          <Box height="100px" marginTop="10px">
            <ReviewRegist
              state={{ boardId: data.content?.boardId, parentReviewId: null }}
              refetch={refetch}
            />
          </Box>

          <HorizontalDivider marginTop="24px" marginBottom="24px" />
          <ReviewList reviewList={data.reviewList} refetch={refetch} />
          <HotArticleList />
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default Board;
