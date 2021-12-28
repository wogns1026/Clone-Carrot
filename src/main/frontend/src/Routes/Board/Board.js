import React from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "Hooks/useAxios";
import BoardDescription from "./BoardDescription";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import HotTradeSmallList from "Routes/TradeDetail/HotTradeSmallList";
import Profile from "Components/Profile/Profile";
import ReviewList from "./Review/ReviewList";
import { Box, FlexBox, HorizontalDivider } from "Components/Universal";

const Board = () => {
  const params = useParams();
  let { loading, data, error } = useAxios({
    url: `/articles/${params.id}`,
  });
  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer direction="column" width="677px" height="100%">
      <Box fullSize>
        <Profile
          id={data.itemId}
          src=""
          name={data.sellerId}
          location={data.location}
          mannerTemper={38.2}
        />
        <HorizontalDivider marginBottom="50px" />
        <FlexBox column>
          <BoardDescription {...data} />
          <HorizontalDivider marginBottom="24px" />
          <ReviewList id={data.boardId} />
          <HotTradeSmallList />
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default Board;
