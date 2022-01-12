import React, { useState } from "react";
import { FlexBox, LazyBackgroundImage, TextArea } from "Components/Universal";
import theme from "Style/theme";
import { ButtonList } from "Routes/Board/ButtonList";

const ReviewRegist = ({ state, regist, cancel }) => {
  const [content, setContent] = useState(state?.content);
  const data = {
    reviewId: state?.reviewId ? state?.reviewId : null,
    boardId: state?.boardId ? state?.boardId : null,
    content,
    parentReviewId: state?.parentReviewId ? state?.parentReviewId : null,
    regTime: new Date(),
    userId: 2, // Redux에서 가져오도록 변경 필요
  };
  const handleCancle = () => {
    setContent("");
    cancel && cancel();
  };
  const handleRegist = () => {
    regist && regist(data);
  };
  return (
    <FlexBox fullSize gap="10px">
      <LazyBackgroundImage
        // src={}
        size="40px"
        round
        center
        border={theme.colors.lightDark}
        alt="사용자이미지"
      />
      <FlexBox
        width="100%"
        center
        border={theme.colors.lightDark}
        outline={theme.colors.dark}
        borderRadius="20px"
        verticalPadding="5px"
        horizontalPadding="20px"
      >
        <TextArea
          fullSize
          fontSize="14x"
          onChange={setContent}
          placeholder="댓글을 입력해 주세요."
          flexWrap
          value={content}
        />
        <FlexBox gap="10px">
          <ButtonList
            data={[
              { text: "등록", callback: handleRegist },
              { text: "취소", callback: handleCancle },
            ]}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
export default ReviewRegist;
