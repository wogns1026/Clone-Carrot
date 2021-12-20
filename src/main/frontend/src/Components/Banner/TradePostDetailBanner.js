import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TradePosterList from "Components/Poster/TradePosterList";
import PosterDescription from "Components/Poster/PosterDescription";
import ImageSwiper from "Components/Swiper/ImageSwiper";
import Profile from "Components/Profile/Profile";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getTradePostData } from "api";
import {
  Box,
  FlexBox,
  TextContent,
  ContentContainer,
  HorizontalDivider,
} from "Components/Universal";

// 임시 이미지 (start)
import main1 from "images/main1.png";
import main2 from "images/main2.png";
// 임시 이미지 (end)

const TradePostDetailBanner = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const newData = await getTradePostData()
          .filter((item) => item.id === Number(params.id))
          .pop();
        if (!newData) return;
        setData(newData);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  return isLoading ? (
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
        <ImageSwiper imageList={[data.imgSrc, main1, data.imgSrc, main2]} />
        <Profile
          id={data.id}
          imgUrl
          name={"요호요호요홋"}
          location={data.location}
          mannerTemper={38.2}
        />
        <HorizontalDivider marginBottom="38px" />
        <PosterDescription
          item_id={data.id}
          item_title={data.title}
          category={data.category}
          price={data.price}
          description={data.description}
          view_cnt={data.view_cnt}
          item_reg_time={data.item_reg_time}
        />
        <HorizontalDivider />
        <Box verticalMargin="35px">
          <FlexBox spaceBetween>
            <TextContent fontSize="18px" fontWeight={800}>
              당근마켓 인기중고
            </TextContent>
            <TextContent to="/top_trade_posts" color="#FF8A3D">
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
