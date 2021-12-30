import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotTradeSmallList from "./HotTradeSmallList";
import TradeDescription from "./TradeDescription";
import TradeDetailInfo from "./TradeDetailInfo";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import Profile from "Components/Profile/Profile";
import {
  Box,
  FlexBox,
  HorizontalDivider,
  ImageSwiper,
} from "Components/Universal";
import { ArticleAPI } from "api";

const TradeDetail = () => {
  const { id } = useParams();
  let { loading, data, error } = ArticleAPI(id);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (data) setState(data);
  }, [data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer
      bgColor="white"
      direction="column"
      width="677px"
      height="100%"
    >
      <Box fullSize marginTop="30px">
        <ImageSwiper imageList={[state.image]} />
        <Profile id={state.sellerId} />
        <HorizontalDivider marginBottom="38px" />
        <FlexBox column>
          <TradeDetailInfo {...state} />
          <TradeDescription {...state} />
        </FlexBox>
        <HorizontalDivider />
        <HotTradeSmallList />
      </Box>
    </ContentContainer>
  );
};
export default TradeDetail;
