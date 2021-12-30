import React, { useEffect, useState } from "react";
import { Box, HorizontalDivider } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import SeeMoreContianer from "../SeeMoreContainer";
import theme from "Style/theme";
import BoardPreview from "./BoardPreview";
import { BoardAPI } from "api";
import { useParams } from "react-router-dom";

const BoardPreviewList = () => {
  const { id } = useParams();
  let { loading, data, error } = BoardAPI(id);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (data) setState(data);
  }, [data]);

  const LoadMoreData = () => {
    // 데이터 추가 로드
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box fullSize marginTop="20px" marginBottom="60px">
      <SeeMoreContianer
        title="동네정보"
        bgColor={theme.colors.white}
        onClicked={LoadMoreData}
      >
        {state.map((d, index) => (
          <Box key={d.boardId}>
            <BoardPreview {...d} />
            {state.length - 1 > index && (
              <HorizontalDivider marginBottom="25px" />
            )}
          </Box>
        ))}
      </SeeMoreContianer>
    </Box>
  );
};
export default BoardPreviewList;
