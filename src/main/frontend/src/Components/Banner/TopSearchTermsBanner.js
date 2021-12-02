import React, { useEffect, useState } from "react";
import ContentContainer from "Components/Univeral/ContentContainer";
import LinkContentList from "Components/Univeral/LinkContentList";
import styled from "styled-components";
import LinkContent from "Components/Univeral/LinkContent";
import { getTopSearchData } from "api";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";

const Title = styled.div`
  width: 100%;
  font-weight: 700;
  margin-bottom: 23px;
`;
const Links = styled.div`
  width: 100%;
  height: 65px;
  border: 1px solid red;
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
              underline={true}
            ></LinkContent>
          </Title>
          <LinkContentList content={topSearchBannerData} />
        </>
      }
    ></ContentContainer>
  );
};
export default TopSearchTermsBanner;
