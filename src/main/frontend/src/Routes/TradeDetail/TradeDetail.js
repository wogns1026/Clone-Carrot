import React from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "Hooks/useAxios";
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

const TradeDetail = () => {
  const params = useParams();
  let { loading, data, error } = useAxios({
    url: `/articles/${params.id}`,
  });

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
        <ImageSwiper imageList={[data.image]} />
        <Profile
          id={data.itemId}
          src=""
          name={data.sellerId}
          location={data.location}
          mannerTemper={38.2}
        />
        <HorizontalDivider marginBottom="38px" />
        <FlexBox column>
          <TradeDetailInfo {...data} />
          <TradeDescription {...data} />
        </FlexBox>
        <HorizontalDivider />
        <HotTradeSmallList />
      </Box>
    </ContentContainer>
  );
};
export default TradeDetail;
