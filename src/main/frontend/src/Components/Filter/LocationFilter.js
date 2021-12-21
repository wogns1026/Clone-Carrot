import React, { useEffect, useState } from "react";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getCityData } from "api";
import { Box, FlexBox, DropdownMenu } from "Components/Universal";

const DEFAULT_CITY = "전체";
const NONE = "";

const LocationFilter = ({ updateRequest }) => {
  const [cityData, setCityData] = useState();
  const [filterData, setFilterData] = useState({
    city: NONE,
    gu: NONE,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);
  const onCitySelected = (option) => {
    option = option === DEFAULT_CITY ? NONE : option;
    const newData = { ...filterData, city: option, gu: NONE };
    setFilterData(newData);
    updateRequest(newData);
  };

  const onGuSelected = (option) => {
    const newData = { ...filterData, gu: option };
    setFilterData(newData);
    updateRequest(newData);
  };

  const disableCondition = () => {
    return filterData.city === NONE;
  };

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const data = await getCityData();
        setCityData(data);
        setIsLoading(false);
      } catch (e) {
        serError(e);
      }
    };
    getMenuData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message color="red" text={error} />
  ) : (
    <Box width="100%" height="45px" marginBottom="30px">
      <FlexBox flexJustify="flex-end" gap="12px">
        <DropdownMenu
          title={
            filterData.city === NONE
              ? "지역을 선택하세요"
              : `${filterData.city}`
          }
          menuList={[DEFAULT_CITY, ...Object.keys(cityData)]}
          onSelected={onCitySelected}
          disabled={false}
        />
        <DropdownMenu
          title={filterData.gu ? `${filterData.gu}` : "동네를 선택하세요"}
          menuList={cityData[filterData.city]}
          onSelected={onGuSelected}
          disabled={disableCondition()}
        />
      </FlexBox>
    </Box>
  );
};

export default LocationFilter;
