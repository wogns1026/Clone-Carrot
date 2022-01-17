import React from "react";
import { FlexBox, Text } from "Components/Universal";
import theme from "styles/theme";
import { getTimeGap } from "utils/time";
import { useModifyBoard } from "../hooks/useModifyBoard";
import { useDeleteBoard } from "../hooks/useDeleteBoard";
import { ButtonList } from "./ButtonList";

const BoardDescription = ({ data }) => {
  const timeGap = getTimeGap(data.regTime);
  const { moveToModifyPage } = useModifyBoard();
  const { deleteBoard } = useDeleteBoard();

  const handleModify = () => {
    moveToModifyPage(data);
  };
  const handleDelete = () => {
    const { reviewId, boardId, parentReviewId } = data;
    deleteBoard(reviewId, boardId, parentReviewId);
  };

  return (
    <FlexBox column gap="24px" marginBottom="24px">
      <Text fontSize="16.5px" lineHeight={1.4} whiteSpace="pre-wrap">
        {data.content}
      </Text>
      <FlexBox spaceBetween>
        <Text fontSize="14px" fontWeight={500} color={theme.colors.dark}>
          {`${timeGap} 전 ∙ 조회 ${data.viewCnt}`}
        </Text>
        <ButtonList
          data={[
            { text: "수정", callback: handleModify },
            { text: "삭제", callback: handleDelete },
          ]}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default BoardDescription;
