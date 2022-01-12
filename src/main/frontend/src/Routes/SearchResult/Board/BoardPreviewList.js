import React, { useEffect, useState } from "react";
import { Box, HorizontalDivider, SeeMoreContainer } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import BoardPreview from "./BoardPreview";
import { boardApi } from "api";
import { useParams } from "react-router-dom";

const BoardPreviewList = ({ size }) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState();
  const { loading, data, error, morefetch, refetch } = boardApi.Search({
    size,
  });
  useEffect(() => {
    if (reviews) {
      setReviews([]);
      refetch();
    }
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
      <SeeMoreContainer title="동네정보" onClicked={morefetch}>
        {reviews?.map((d, index) => (
          <Box key={d.boardId}>
            <BoardPreview {...d} />
            {reviews?.length - 1 > index && (
              <HorizontalDivider marginBottom="25px" />
            )}
          </Box>
        ))}
      </SeeMoreContainer>
    </Box>
  );
};
export default BoardPreviewList;
