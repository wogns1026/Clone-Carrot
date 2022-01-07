import React, { useState } from "react";
import LocationFilter from "Components/Filter/LocationFilter";
import ContentContainer from "Components/Content/ContentContainer";
import TradeArticleList from "Components/Article/TradeArticleList";
import { getShortCityName } from "api";
import { Text } from "Components/Universal";

const HotTrades = () => {
  const [filter, setFilter] = useState({ city: "", gu: "" });
  const shortCityName = getShortCityName();

  const filterOut = (data) => {
    let filteredData = data;
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
      <Text
        fontSize="31.5px"
        fontWeight={600}
        marginTop="56px"
        marginBottom="45px"
      >
        중고거래 인기매물
      </Text>
      <LocationFilter updateRequest={setFilter} />
      <TradeArticleList
        filter={filterOut}
        gridSize="201px"
        gridGap="50px"
        size={100}
      ></TradeArticleList>
    </ContentContainer>
  );
};

export default HotTrades;
