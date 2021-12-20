import React, { useState } from "react";
import styled from "styled-components";
import LocationFilter from "Components/Filter/LocationFilter";
import TradePosterList from "Components/Poster/TradePosterList";
import { getShortCityName } from "api";
import { useAxios } from "Hooks/useAxios";
import { ContentContainer } from "Components/Universal";

const TradePosterTitle = styled.span`
  font-size: 31.5px;
  font-weight: 600;
  margin-top: 56px;
  margin-bottom: 45px;
`;
const TradeFilterBanner = () => {
  const [filter, setFilter] = useState([{ city: "", gu: "" }]);
  let { loading, data, error, refetch } = useAxios({
    url: "http://localhost:8080/api/v1/hot-articles",
  });

  const getFilterData = () => {
    let filteredData = data;
    const shortCityName = getShortCityName();

    if (filter.city) {
      filteredData = filteredData.filter((d) =>
        d.location.includes(shortCityName[filter.city])
      );
      if (filter.gu) {
        filteredData = filteredData.filter((d) =>
          d.location.includes(filter.gu)
        );
      }
    }
    return filteredData;
  };
  return (
    <ContentContainer
      bgColor="white"
      direction="column"
      width="980px"
      height="100%"
    >
      <TradePosterTitle>중고거래 인기매물</TradePosterTitle>
      <LocationFilter updateRequest={setFilter} />
      <TradePosterList
        posterList={data}
        loading={loading}
        error={error}
        gridSize={"201px"}
        gridGap={"50px"}
      ></TradePosterList>
    </ContentContainer>
  );
};

export default TradeFilterBanner;
