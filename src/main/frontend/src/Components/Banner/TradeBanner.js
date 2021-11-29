import React from "react";
import TradePosterList from "Components/Poster/TradePosterList";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const CenterAlign = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.section`
  ${CenterAlign};
  width: 100%;
  height: 1200px;
  background-color: #f8f9fa;
`;

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
    <Banner>
      <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
      <TradePosterList posterList={tradeBannerData}></TradePosterList>
      <TradePosterMoreLink to="/top_trade_posts">
        인기매물 더 보기
      </TradePosterMoreLink>
    </Banner>
  ) : (
    ""
  );
};
export default TradeBanner;
