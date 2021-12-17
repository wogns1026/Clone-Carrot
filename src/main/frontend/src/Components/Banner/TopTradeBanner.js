import React from "react";
import styled from "styled-components";
import TradePosterList from "Components/Poster/TradePosterList";
import ContentContainer from "Components/Universal/ContentContainer";
import LinkContent from "Components/Universal/LinkContent";

const TradePosterTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-top: 129px;
  margin-bottom: 87px;
`;
const TradePosterMoreLink = styled.div`
  font-weight: 700;
  margin-bottom: 185px;
`;

const TopTradeBanner = () => {
  return (
    <ContentContainer
      bgColor="#f8f9fa"
      direction="column"
      height="100%"
      component={
        <>
          <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
          <TradePosterList />
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
export default TopTradeBanner;
