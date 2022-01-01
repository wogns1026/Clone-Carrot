import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, RegularGrid } from "Components/Universal";
import SeeMoreContianer from "../SeeMoreContainer";
import TradeArticle from "./TradeArticle";
import theme from "Style/theme";
import { SearchAPI } from "api";
import Message from "Components/Loading/Message";

const TradeArticleList = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);
  let { loading, data, error } = SearchAPI(id);
  useEffect(() => {
    if (data) setState(data);
  }, [data]);

  const LoadMoreData = () => {
    // 데이터 추가 로드
  };

  return error ? (
    <Message text={error} />
  ) : (
    !loading && (
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
    )
  );
};
export default TradeArticleList;
