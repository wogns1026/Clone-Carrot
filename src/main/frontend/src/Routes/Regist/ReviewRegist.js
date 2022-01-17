import React, { useState } from "react";
import { FlexBox, LazyBackgroundImage, TextArea } from "Components/Universal";
import theme from "styles/theme";
import { useRegistReview } from "Routes/Board/Review/hooks/useRegistReview";
import { useModifyReview } from "Routes/Board/Review/hooks/useModifyReview";
import { ButtonList } from "Routes/Board/Contents/ButtonList";

const ReviewRegist = ({ state, cancel, isModify }) => {
  const { regist } = useRegistReview();
  const { modify } = useModifyReview();
  const [content, setContent] = useState(state?.content);

  const data = {
    reviewId: null,
    boardId: null,
    parentReviewId: null,
    userId: 2, // Redux에서 가져오도록 변경 필요
    ...state,
    content,
    regTime: new Date(),
  };
  const handleCancle = () => {
    setContent("");
    cancel && cancel();
  };
  const handleRegist = () => {
    if (isModify) modify && modify(data);
    else regist && regist(data);
    handleCancle();
  };

  const controlButtonData = [
    { text: "등록", callback: handleRegist },
    { text: "취소", callback: handleCancle },
  ];

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
          <ButtonList data={controlButtonData} />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
export default ReviewRegist;
