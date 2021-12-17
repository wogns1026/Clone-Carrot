import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "Components/Universal/ContentContainer";
import HorizontalDivider from "Components/Universal/HorizontalDivider";
import TextContent from "Components/Universal/TextContent";
import LinkContent from "Components/Universal/LinkContent";
import TradePosterList from "Components/Poster/TradePosterList";
import PosterDescription from "Components/Poster/PosterDescription";
import ImageSwiper from "Components/Swiper/ImageSwiper";
import Profile from "Components/Profile/Profile";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getTradePostData } from "api";

// 임시 이미지 (start)
import main1 from "images/main1.png";
import main2 from "images/main2.png";
// 임시 이미지 (end)

const Conatiner = styled.section`
  width: 100%;
  margin-top: 30px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
`;

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
    <>
      <ContentContainer
        bgColor="white"
        direction="column"
        width="677px"
        height="100%"
        component={
          <Conatiner>
            <ImageSwiper imageList={[data.imgSrc, main1, data.imgSrc, main2]} />
            <Profile
              id={data.id}
              imgUrl
              name={"요호요호요홋"}
              location={data.location}
              mannerTemper={38.2}
            />
            <HorizontalDivider marginBottom={"38px"} />
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
            {/* <TradePosterTitle>중고거래 인기중고</TradePosterTitle> */}
            <Title>
              <TextContent
                text={"당근마켓 인기중고"}
                fontSize={"18px"}
                fontWeight={800}
              />
              <LinkContent
                content={[{ text: "더 구경하기", path: "/top_trade_posts" }]}
                color={"#FF8A3D"}
              />
            </Title>
            <TradePosterList
              gridSize={"200px"}
              gridGap={"30px"}
            ></TradePosterList>
          </Conatiner>
        }
      />
    </>
  );
};
export default TradePostDetailBanner;
