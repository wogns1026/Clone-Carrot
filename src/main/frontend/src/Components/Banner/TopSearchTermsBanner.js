import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getTopSearchData } from "api";
import { TextContent, ContentContainer } from "Components/Universal";

const Title = styled.div`
  width: 100%;
  margin-bottom: 23px;
`;
const Links = styled.div`
  width: 100%;
  padding-left: 57px;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
`;
const TopSearchTermsBanner = () => {
  const [topSearchBannerData, setTopSearchBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);

  // let { loading, data, error, refetch } = useAxios({
  //   url: "http://localhost:8080/api/v1/hot-search-terms",
  // });

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
    <Message text={error} />
  ) : (
    <ContentContainer direction="column" height="160px">
      <Title>
        <TextContent
          to={"/top_search_terms"}
          fontSize={"16px"}
          fontWeight={700}
          underline={"underline"}
        >
          중고거래 인기검색어
        </TextContent>
      </Title>
      <Links>
        {topSearchBannerData.map((data, index) => (
          <TextContent
            key={index}
            to={`/search/${data.text}`}
            fontSize={"16px"}
          >
            {data.text}
          </TextContent>
        ))}
      </Links>
    </ContentContainer>
  );
};
export default TopSearchTermsBanner;
