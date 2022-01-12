import React, { useState } from "react";
import ReviewProfile from "./ReviewProfile";
import { Box, FlexBox, HorizontalDivider, Text } from "Components/Universal";
import { ButtonList } from "../ButtonList";
import ReviewRegist from "Routes/Regist/ReviewRegist";
import ReviewDescription from "./ReviewDescription";

const ReviewContent = ({ data, regist, remove }) => {
  const [modifyMode, setModifyMode] = useState(false);
  const [addReview, setAddreview] = useState(false);

  return modifyMode ? (
    <Box height="100px" marginTop="1s0px">
      <ReviewRegist
        state={data}
        regist={regist}
        cancel={() => setModifyMode(false)}
      />
    </Box>
  ) : (
    <Box>
      <FlexBox spaceBetween>
        <ReviewProfile userId={data.userId} src={data.image} />
        <ButtonList
          data={[
            { text: "수정", callback: () => setModifyMode(true) },
            { text: "삭제", callback: () => remove(data.reviewId) },
          ]}
        />
      </FlexBox>

      <ReviewDescription
        description={data.content}
        itemRegTime={data.regTime}
        parentReviewId={data.parentReviewId}
        addReview={() => setAddreview((cur) => !cur)}
      />
      {addReview && (
        <Box height="100px" marginTop="10px">
          <ReviewRegist
            state={{
              boardId: data.boardId,
              reviewId: null,
              parentReviewId: data.reviewId,
            }}
            regist={regist}
          />
        </Box>
      )}
    </Box>
  );
};

const Review = ({ data, childReviews, regist, remove }) => {
  return (
    <>
      <ReviewContent data={data} regist={regist} remove={remove} />
      <HorizontalDivider marginTop="20px" marginBottom="20px" />

      {childReviews.map((childData) => (
        <Box key={childData.reviewId}>
          <FlexBox>
            <Text marginRight="12px">ㄴ</Text>
            <ReviewContent data={childData} regist={regist} remove={remove} />
          </FlexBox>
          <HorizontalDivider marginTop="20px" marginBottom="20px" />
        </Box>
      ))}
    </>
  );
};
export default Review;
