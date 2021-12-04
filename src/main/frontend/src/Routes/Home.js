import styled, { css } from "styled-components";
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
  return (
    <Section>
      <MainBanner />
      <TradeBanner />
      <TopSearchTermsBanner />
    </Section>
  );
};
export default Home;
