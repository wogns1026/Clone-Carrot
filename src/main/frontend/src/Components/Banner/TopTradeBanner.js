import React from "react";
import styled from "styled-components";
import TradePosterList from "Components/Poster/TradePosterList";
import { TextContent, ContentContainer } from "Components/Universal";

const Title = styled.span`
  margin: 129px 0px 87px 0px;
`;
const Link = styled.div`
  margin-bottom: 185px;
`;

const TopTradeBanner = () => {
  return (
    <ContentContainer bgColor="#f8f9fa" direction="column" height="100%">
      <Title>
        <TextContent fontSize="40px" fontWeight={600}>
          중고거래 인기매물
        </TextContent>
      </Title>
      <TradePosterList />
      <Link>
        <TextContent
          to={`/top_trade_posts`}
          fontSize={"16px"}
          fontWeight={600}
          underline={"underline"}
        >
          인기매물 더 보기
        </TextContent>
      </Link>
    </ContentContainer>
  );
};
export default TopTradeBanner;
