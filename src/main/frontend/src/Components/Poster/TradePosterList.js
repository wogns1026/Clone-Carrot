import React, { useEffect, useState } from "react";
import TradePoster from "./TradePoster";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { RegularGrid } from "Components/Universal/Grid";
import { Box } from "Components/Universal";
import { getShortCityName, getTradePostData } from "api";

const TradePosterList = ({ filter, gridSize = "210px", gridGap = "56px" }) => {
  const [tradeBannerData, setTradeBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);

  useEffect(() => {
    async function getTradeData() {
      try {
        let data =
          filter !== undefined
            ? await getTradePostData(filter) // filter 정보로 데이터 조회
            : await getTradePostData(); // filter 없이 조회

        // 임시 코드 (start)
        if (filter !== undefined) {
          data = await getTradePostData(filter);
          let { city, gu } = filter;
          if (city) {
            const shortCityName = getShortCityName();
            if (shortCityName[city]) {
              city = shortCityName[city];
              data = data.filter((d) => d.location.includes(city));
              data = gu ? data.filter((d) => d.location.includes(gu)) : data;
            }
          }
        }
        // 임시 코드 (end)

        setTradeBannerData(data);
        setIsLoading(false);
      } catch (e) {
        serError(e);
      }
    }
    getTradeData();
  }, [filter]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box width="100%" horizontalMargin="6px">
      <RegularGrid gridSize={gridSize} gridGap={gridGap}>
        {tradeBannerData.map((post) => (
          <TradePoster
            key={post.id}
            id={post.id}
            posterImgUrl={post.imgUrl}
            title={post.title}
            price={post.price}
            location={post.location}
            interest={post.interest}
            height={gridSize}
          />
        ))}
      </RegularGrid>
    </Box>
  );
};
export default TradePosterList;
