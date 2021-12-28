import React from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "Hooks/useAxios";
import { Box, HorizontalDivider } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import SeeMoreContianer from "../SeeMoreContainer";
import theme from "Style/theme";
import BoardPreview from "./BoardPreview";

const BoardPreviewList = ({ id, src, description, location }) => {
  const params = useParams();
  let { loading, data, error } = useAxios({
    url: `/hot-articles`,
  });
  // description 내에 params 를 포함하는 데이터를 가져와야함.
  // 전체를 다 load 하면 안되고 page 형태로 로드 하도록

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
        {data.map((d, index) => (
          <Box key={d.id}>
            <BoardPreview
              id={d.id}
              src={d.image}
              description={d.description}
              location="경기도 화성시"
            />
            {data.length - 1 > index && (
              <HorizontalDivider marginBottom="25px" />
            )}
          </Box>
        ))}
      </SeeMoreContianer>
    </Box>
  );
};
export default BoardPreviewList;
