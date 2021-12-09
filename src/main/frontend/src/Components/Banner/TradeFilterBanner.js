import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentContainer from "Components/Universal/ContentContainer";
import LocationFilter from "Components/Filter/LocationFilter";
import TradePosterList from "Components/Poster/TradePosterList";
import { getShortCityName, getTradePostData } from "api";

const TradePosterTitle = styled.span`
  font-size: 31.5px;
  font-weight: 600;
  margin-top: 56px;
  margin-bottom: 45px;
`;
const TradeFilterBanner = () => {
  const [tradeBannerData, setTradeBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);

  useEffect(() => {
    getTradeData();
  }, []);

  async function getTradeData(city = "", gu = "") {
    try {
      let data = await getTradePostData();
      if (!data) {
        return;
      }
      if (city) {
        const shortCityName = getShortCityName();
        if (shortCityName[city]) {
          city = shortCityName[city];
          data = data.filter((d) => d.location.includes(city));
          data = gu ? data.filter((d) => d.location.includes(gu)) : data;
        }
      }
      setTradeBannerData(data);
      setIsLoading(false);
    } catch (e) {
      serError(e);
    } finally {
    }
  }
  return (
    <ContentContainer
      bgColor="white"
      direction="column"
      width="980px"
      height="100%"
      component={
        <>
          <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
          <LocationFilter updateRequest={getTradeData} />
          <TradePosterList
            posterList={tradeBannerData}
            loading={isLoading}
            error={error}
            gridSize={"201px"}
            gridGap={"57px"}
          ></TradePosterList>
        </>
      }
    ></ContentContainer>
  );
};

export default TradeFilterBanner;
