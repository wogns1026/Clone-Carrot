import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentContainer from "Components/Universal/ContentContainer";
import LinkContentList from "Components/Universal/LinkContentList";
import LinkContent from "Components/Universal/LinkContent";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getTopSearchData } from "api";

const Title = styled.div`
  width: 100%;
  font-weight: 700;
  margin-bottom: 23px;
`;
const LinkContainer = styled.div`
  width: 100%;
  padding-left: 57px;
  margin-bottom: 18px;
`;

const TopSearchTermsBanner = () => {
  const [topSearchBannerData, setTopSearchBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTopSearchData();
        setTopSearchBannerData(data);
        setIsLoading(false);
      } catch (e) {
        serError(e);
      }
    };
    getData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message color="red" text={error} />
  ) : (
    <ContentContainer
      direction="column"
      height="160px"
      component={
        <>
          <Title>
            <LinkContent
              content={[
                { text: "중고거래 인기검색어", path: "/top_search_terms" },
              ]}
              fontSize={"16px"}
              fontWeight={700}
              underline={"underline"}
            ></LinkContent>
          </Title>
          <LinkContainer>
            <LinkContentList content={topSearchBannerData} fontSize={"16px"} />
          </LinkContainer>
        </>
      }
    ></ContentContainer>
  );
};
export default TopSearchTermsBanner;
