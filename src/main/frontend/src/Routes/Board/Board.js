import React from "react";
import { useParams } from "react-router-dom";
import BoardDescription from "./BoardDescription";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import HotTradeSmallList from "Routes/TradeDetail/HotTradeSmallList";
import Profile from "Components/Profile/Profile";
import ReviewList from "./Review/ReviewList";
import { Box, FlexBox, HorizontalDivider } from "Components/Universal";
import { boardApi } from "api";

const Board = () => {
  const { id } = useParams();
  let { loading, data, error } = boardApi.GetBoard(id);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer direction="column" width="677px" height="100%">
      <Box fullSize>
        <Profile id={data.content?.userId} />
        <HorizontalDivider marginBottom="50px" />
        <FlexBox column>
          <BoardDescription {...data.content} />
          <HorizontalDivider marginBottom="24px" />
          <ReviewList reviewList={data.reviewList} />
          <HotTradeSmallList />
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default Board;
