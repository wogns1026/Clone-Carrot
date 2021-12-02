import React, { useEffect, useState } from "react";
import TradePosterList from "Components/Poster/TradePosterList";
import styled from "styled-components";
import ContentContainer from "Components/Univeral/ContentContainer";
import LinkContent from "Components/Univeral/LinkContent";
import { getTradePostData } from "api";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";

const TradePosterTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 86px;
`;
const TradePosterMoreLink = styled.div`
  font-weight: 700;
  margin-top: 60px;
`;

const TradeBanner = () => {
  const [tradeBannerData, setTradeBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTradePostData();
        setTradeBannerData(data);
        setIsLoading(false);
      } catch (e) {
        serError(e);
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
      bgColor="#f8f9fa"
      direction="column"
      height="1200px"
      component={
        <>
          <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
          <TradePosterList posterList={tradeBannerData}></TradePosterList>
          <TradePosterMoreLink>
            <LinkContent
              content={[{ text: "인기매물 더 보기", path: "/top_trade_posts" }]}
              underline={true}
            />
          </TradePosterMoreLink>
        </>
      }
    ></ContentContainer>
  );
};
export default TradeBanner;
