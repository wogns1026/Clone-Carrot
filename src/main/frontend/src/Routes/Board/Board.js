import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardDescription from "./BoardDescription";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import HotTradeSmallList from "Routes/TradeDetail/HotTradeSmallList";
import Profile from "Components/Profile/Profile";
import ReviewList from "./Review/ReviewList";
import { Box, FlexBox, HorizontalDivider } from "Components/Universal";
import { ArticleAPI } from "api";

const Board = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);
  let { loading, data, error } = ArticleAPI(id);

  useEffect(() => {
    if (data) setState(data);
  }, [data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer direction="column" width="677px" height="100%">
      <Box fullSize>
        <Profile
          id={state.itemId}
          src=""
          name={state.sellerId}
          location={state.location}
          mannerTemper={38.2}
        />
        <HorizontalDivider marginBottom="50px" />
        <FlexBox column>
          <BoardDescription {...state} />
          <HorizontalDivider marginBottom="24px" />
          <ReviewList id={state.boardId} />
          <HotTradeSmallList />
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default Board;
