import React, { useState } from "react";
import ArticleList from "Components/Article/ArticleList";
import LocationFilter from "./LocationFilter";
import { ContentContainer, Text } from "Components/Universal";
import { getShortCityName } from "api";
import theme from "Style/theme";
const HotArticleList = () => {
  const [filter, setFilter] = useState({ city: "", gu: "" });
  const shortCityName = getShortCityName();

  const filterOut = (data) => {
    let filteredData = data;

    if (filter.city) {
      filteredData = filteredData.filter((d) =>
        d.address.includes(shortCityName[filter.city])
      );
      if (filter.gu) {
        filteredData = filteredData.filter((d) =>
          d.address.includes(filter.gu)
        );
      }
    }
    return filteredData;
  };
  return (
    <ContentContainer column width={theme.size.window.hotArticles}>
      <Text
        fontSize="31.5px"
        fontWeight={600}
        marginTop="56px"
        marginBottom="45px"
      >
        중고거래 인기매물
      </Text>
      <LocationFilter updateRequest={setFilter} />
      <ArticleList
        filter={filterOut}
        gridSize="201px"
        gridGap="50px"
        size={100}
      ></ArticleList>
    </ContentContainer>
  );
};

export default HotArticleList;
