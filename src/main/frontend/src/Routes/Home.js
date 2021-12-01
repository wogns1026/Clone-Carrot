import styled, { css } from "styled-components";
import { data, tradePostData } from "api";
import { useState, useEffect } from "react";
import TradeBanner from "Components/Banner/TradeBanner";
import MainBanner from "Components/Banner/MainBanner";

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

  useEffect(() => {
    setBannerData(data);
    setTradeBannerData(tradePostData);
  }, []);

  return (
    <Section>
      <MainBanner bannerData={bannerData} />
      <TradeBanner tradeBannerData={tradeBannerData} />
    </Section>
  );
};
export default Home;
