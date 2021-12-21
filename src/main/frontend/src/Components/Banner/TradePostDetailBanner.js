import React from "react";
import { useParams } from "react-router-dom";
import TradePosterList from "Components/Poster/TradePosterList";
import PosterDescription from "Components/Poster/PosterDescription";
import ImageSwiper from "Components/Swiper/ImageSwiper";
import Profile from "Components/Profile/Profile";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import {
  Box,
  FlexBox,
  TextContent,
  ContentContainer,
  HorizontalDivider,
} from "Components/Universal";
import theme from "Style/theme";
import { useAxios } from "Hooks/useAxios";

const TradePostDetailBanner = () => {
  const params = useParams();
  let { loading, data, error, refetch } = useAxios({
    url: `/articles/${params.id}`,
  });

  return loading ? (
    <Loader />
  ) : error ? (
    <Message color="red" text={error} />
  ) : (
    <ContentContainer
      bgColor="white"
      direction="column"
      width="677px"
      height="100%"
    >
      <Box marginTop="30px">
        <ImageSwiper imageList={[data.image]} />
        <Profile
          id={data.itemId}
          imgUrl
          name={data.sellerId}
          location={data.location}
          mannerTemper={38.2}
        />
        <HorizontalDivider marginBottom="38px" />
        <PosterDescription
          itemId={data.itemId}
          itemTitle={data.itemTitle}
          category={data.category}
          cost={data.cost}
          description={data.description}
          viewCnt={data.viewCnt}
          itemRegTime={data.itemRegTime}
        />
        <HorizontalDivider />
        <Box verticalMargin="35px">
          <FlexBox spaceBetween>
            <TextContent fontSize="18px" fontWeight={800}>
              당근마켓 인기중고
            </TextContent>
            <TextContent to="/top_trade_posts" color={`${theme.colors.carrot}`}>
              더 구경하기
            </TextContent>
          </FlexBox>
        </Box>
        <TradePosterList gridSize={"200px"} gridGap={"30px"}></TradePosterList>
      </Box>
    </ContentContainer>
  );
};
export default TradePostDetailBanner;
