import React, { useState } from "react";
import styled from "styled-components";
import ContentContainer from "Components/Universal/ContentContainer";
import LocationFilter from "Components/Filter/LocationFilter";
import TradePosterList from "Components/Poster/TradePosterList";

const TradePosterTitle = styled.span`
  font-size: 31.5px;
  font-weight: 600;
  margin-top: 56px;
  margin-bottom: 45px;
`;
const TradeFilterBanner = () => {
  const [filter, setFilter] = useState({});
  return (
    <ContentContainer
      bgColor="white"
      direction="column"
      width="980px"
      height="100%"
      component={
        <>
          <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
          <LocationFilter onFilterSelected={setFilter} />
          <TradePosterList
            filter={filter}
            gridSize={"201px"}
            gridGap={"54px"}
          ></TradePosterList>
        </>
      }
    ></ContentContainer>
  );
};

export default TradeFilterBanner;
