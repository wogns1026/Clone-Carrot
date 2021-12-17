import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import DropdownMenu from "Components/Universal/DropdownMenu";
import { getCityData } from "api";

const DEFAULT_CITY = "전체";
const NONE = "";
const DropdownMenuList = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 45px;
  gap: 12px;
  margin-bottom: 30px;
`;

const LocationFilter = ({ onFilterSelected }) => {
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
    onFilterSelected(newData);
  };

  const onGuSelected = (option) => {
    const newData = { ...filterData, gu: option };
    setFilterData(newData);
    onFilterSelected(newData);
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
    <DropdownMenuList>
      <DropdownMenu
        title={
          filterData.city === NONE ? "지역을 선택하세요" : `${filterData.city}`
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
    </DropdownMenuList>
  );
};

export default LocationFilter;
