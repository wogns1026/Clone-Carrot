import React from "react";
import { Box, FlexBox, DropdownMenu } from "Components/Universal";
import { getCityData } from "../../redux/data/locationData";
import { useFetchFilter } from "./hooks/useFetchFilter";

const LocationFilter = () => {
  const cityData = getCityData();
  const { filter, changeFilter } = useFetchFilter();

  const DEFAULT_CITY = "전체";
  const cityList = [DEFAULT_CITY, ...Object.keys(cityData)];
  const guList = cityData[filter.city];
  const disableCondition = !filter.city;
  const cityTitle = filter.city ? `${filter.city}` : "지역을 선택하세요";
  const guTitle = filter.gu ? `${filter.gu}` : "동네를 선택하세요";

  const onCitySelected = (option) => {
    option = option === DEFAULT_CITY ? "" : option;
    const newData = { city: option, gu: "" };
    changeFilter(newData);
  };

  const onGuSelected = (option) => {
    const newData = { gu: option };
    changeFilter(newData);
  };

  return (
    <Box width="100%" height="45px" marginBottom="30px">
      <FlexBox flexJustify="flex-end" gap="12px">
        <DropdownMenu
          title={cityTitle}
          menuList={cityList}
          onSelected={onCitySelected}
          disabled={false}
        />
        <DropdownMenu
          title={guTitle}
          menuList={guList}
          onSelected={onGuSelected}
          disabled={disableCondition}
        />
      </FlexBox>
    </Box>
  );
};

export default LocationFilter;
