import React, { useEffect, useState } from "react";
import { Box, HorizontalDivider } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import SeeMoreContianer from "../SeeMoreContainer";
import theme from "Style/theme";
import BoardPreview from "./BoardPreview";
import { boardApi } from "api";
import { useParams } from "react-router-dom";

const BoardPreviewList = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState();
  const { loading, data, error, moreFetch } = boardApi.Search({
    size: 6,
  });

  useEffect(() => {
    if (reviews) moreFetch();
  }, [id]);

  useEffect(() => {
    if (data) {
      if (reviews) setReviews([...reviews, ...data.content]);
      else setReviews(data.content);
    }
  }, [data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <Box fullSize marginTop="20px" marginBottom="60px">
      <SeeMoreContianer
        title="동네정보"
        bgColor={theme.colors.white}
        onClicked={moreFetch}
      >
        {reviews?.map((d, index) => (
          <Box key={d.boardId}>
            <BoardPreview {...d} />
            {reviews?.length - 1 > index && (
              <HorizontalDivider marginBottom="25px" />
            )}
          </Box>
        ))}
      </SeeMoreContianer>
    </Box>
  );
};
export default BoardPreviewList;
