import React from "react";
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
import { articleApi } from "api";
import theme from "Style/theme";

const TradeDetail = () => {
  const { id } = useParams();
  let { loading, data, error } = articleApi.GetArticle(id);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer
      bgColor={theme.colors.white}
      direction="column"
      width="677px"
      height="100%"
    >
      <Box fullSize marginTop="30px">
        <ImageSwiper imageList={[data.data.image]} />
        <Profile id={data.data.sellerId ? data.data.sellerId : 1} />
        <HorizontalDivider marginBottom="38px" />
        <FlexBox column>
          <TradeDetailInfo {...data.data} />
          <TradeDescription {...data.data} />
        </FlexBox>
        <HorizontalDivider />
        <HotTradeSmallList />
      </Box>
    </ContentContainer>
  );
};
export default TradeDetail;
