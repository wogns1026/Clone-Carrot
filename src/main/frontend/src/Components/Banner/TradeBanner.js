import React from "react";
import TradePosterList from "Components/Poster/TradePosterList";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "Components/Univeral/ContentContainer";

const TradePosterTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 86px;
`;
const TradePosterMoreLink = styled(Link)`
  text-decoration: underline;
  font-weight: 700;
  margin-top: 60px;
`;

const TradeBanner = ({ tradeBannerData }) => {
  return tradeBannerData ? (
    <ContentContainer
      bgColor="#f8f9fa"
      direction="column"
      height="1200px"
      component={
        <>
          <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
          <TradePosterList posterList={tradeBannerData}></TradePosterList>
          <TradePosterMoreLink to="/top_trade_posts">
            인기매물 더 보기
          </TradePosterMoreLink>
        </>
      }
    ></ContentContainer>
  ) : (
    ""
  );
};
export default TradeBanner;
