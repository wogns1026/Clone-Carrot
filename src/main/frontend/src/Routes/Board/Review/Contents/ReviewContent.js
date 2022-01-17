import React, { useState } from "react";
import ReviewProfile from "../Profile/ReviewProfile";
import { Box, FlexBox } from "Components/Universal";
import ReviewRegist from "Routes/Regist/ReviewRegist";
import ReviewDescription from "./ReviewDescription";
import { useDeleteReviewByReviewId } from "../hooks/useDeleteReviewByReviewId";
import { ButtonList } from "Routes/Board/Contents/ButtonList";

const ReviewContent = ({ data }) => {
  const [modifyMode, setModifyMode] = useState(false);
  const { deleteReview } = useDeleteReviewByReviewId();

  const handleDelete = () => {
    const { reviewId, boardId, parentReviewId } = data;
    deleteReview(reviewId, boardId, parentReviewId);
  };
  const handleModify = () => setModifyMode(true);
  const handleCancle = () => setModifyMode(false);

  const controlButtonData = [
    { text: "수정", callback: handleModify },
    { text: "삭제", callback: handleDelete },
  ];

  return modifyMode ? (
    <Box height="100px" marginTop="10px">
      <ReviewRegist state={data} cancel={handleCancle} isModify={true} />
    </Box>
  ) : (
    <Box>
      <FlexBox spaceBetween>
        <ReviewProfile userId={data.userId} src={data.image} />
        <ButtonList data={controlButtonData} />
      </FlexBox>
      <ReviewDescription data={data} />
    </Box>
  );
};
export default ReviewContent;
