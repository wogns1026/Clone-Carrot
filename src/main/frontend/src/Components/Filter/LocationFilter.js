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

const LocationFilter = ({ updateRequest }) => {
  const [cityData, setCityData] = useState();
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);
  const [selectedGu, setSelectedGu] = useState(NONE);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);

  const onCitySelected = (option) => {
    setSelectedCity(option);
    setSelectedGu(NONE);
    if (option === DEFAULT_CITY) {
      updateRequest(NONE, NONE);
    } else {
      updateRequest(option, NONE);
    }
  };

  const onGuSelected = (option) => {
    setSelectedGu(option);
    updateRequest(selectedCity, option);
  };

  const disableCondition = () => {
    return selectedCity === DEFAULT_CITY;
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
          selectedCity === DEFAULT_CITY
            ? "지역을 선택하세요"
            : `${selectedCity}`
        }
        menuList={[DEFAULT_CITY, ...Object.keys(cityData)]}
        onSelected={onCitySelected}
        disabled={false}
      />
      <DropdownMenu
        title={selectedGu ? `${selectedGu}` : "동네를 선택하세요"}
        menuList={cityData[selectedCity]}
        onSelected={onGuSelected}
        disabled={disableCondition()}
      />
    </DropdownMenuList>
  );
};

export default LocationFilter;
