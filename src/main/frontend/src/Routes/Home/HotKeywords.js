import React, { useEffect, useState } from "react";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import { Text, Box, FlexBox } from "Components/Universal";
import { getTopSearchData } from "api";

const HotKeywords = () => {
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
    <Message text={error} />
  ) : (
    <ContentContainer direction="column" height="160px">
      <Box width="100%" marginBottom="23px">
        <Text
          to={"/top_search_terms"}
          fontSize="16px"
          fontWeight={700}
          underline
        >
          중고거래 인기검색어
        </Text>
      </Box>
      <Box width="100%" marginLeft="57px" marginBottom="18px">
        <FlexBox spaceBetween>
          {topSearchBannerData.map((data, index) => (
            <Text key={index} to={`/search/${data.text}`} fontSize="16px">
              {data.text}
            </Text>
          ))}
        </FlexBox>
      </Box>
    </ContentContainer>
  );
};
export default HotKeywords;
