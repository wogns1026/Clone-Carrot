import styled, { css } from "styled-components";
import { getBannerData, getTradePostData, getTopSearchData } from "api";
import { useState, useEffect } from "react";
import TradeBanner from "Components/Banner/TradeBanner";
import MainBanner from "Components/Banner/MainBanner";
import TopSearchTermsBanner from "Components/Banner/TopSearchTermsBanner";

const CenterAlign = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  ${CenterAlign};
`;

const Home = () => {
  const [bannerData, setBannerData] = useState([]);
  const [tradeBannerData, setTradeBannerData] = useState([]);
  const [topSearchBannerData, setTopSearchBannerData] = useState([]);

  useEffect(() => {
    setBannerData(getBannerData);
    setTradeBannerData(getTradePostData);
    const newData = getTopSearchData;
    setTopSearchBannerData(newData);
  }, []);

  return (
    <Section>
      <MainBanner bannerData={bannerData} />
      <TradeBanner tradeBannerData={tradeBannerData} />
      <TopSearchTermsBanner data={topSearchBannerData} />
    </Section>
  );
};
export default Home;
