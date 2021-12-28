import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "Hooks/useAxios";
import { Box, RegularGrid } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import SeeMoreContianer from "../SeeMoreContainer";
import TradeArticle from "./TradeArticle";
import theme from "Style/theme";

const TradeArticleList = () => {
  const params = useParams();
  const [state, setState] = useState([]);
  let { loading, data, error } = useAxios({
    url: `/search/${params.id}`,
  });

  const LoadMoreData = () => {
    // 데이터 추가 로드
  };

  useEffect(() => {
    if (data) {
      // 임시 데이터
      const newData = data.reduce((acc, cur) => {
        acc.push({ ...cur, location: "경기도 화성시" });
        return acc;
      }, []);
      setState(newData);
    }
  }, [loading, data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box fullSize marginTop="32px">
      <SeeMoreContianer
        title="중고거래"
        bgColor={theme.colors.white}
        onClicked={LoadMoreData}
      >
        <Box width="100%">
          <RegularGrid gridSize="215px" gridGap="35px">
            {state.map(({ itemId, ...rest }) => (
              <TradeArticle key={itemId} itemId={itemId} {...rest} />
            ))}
          </RegularGrid>
        </Box>
      </SeeMoreContianer>
    </Box>
  );
};
export default TradeArticleList;
