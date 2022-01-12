import React from "react";
import { FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";
import { getTimeGap } from "Utils/time";
import { ButtonList } from "./ButtonList";

const BoardDescription = ({
  content = "",
  viewCnt = 0,
  regTime,
  modify,
  remove,
}) => {
  const timeGap = getTimeGap(regTime);
  return (
    <FlexBox spaceBetween marginBottom="24px">
      <FlexBox column gap="24px">
        <Text fontSize="16.5px" lineHeight={1.4} whiteSpace="pre-wrap">
          {content}
        </Text>
        <Text fontSize="14px" fontWeight={500} color={theme.colors.dark}>
          {`${timeGap} 전 ∙ 조회 ${viewCnt}`}
        </Text>
      </FlexBox>
      <ButtonList
        data={[
          { text: "수정", callback: modify },
          { text: "삭제", callback: remove },
        ]}
      />
    </FlexBox>
  );
};

export default BoardDescription;
