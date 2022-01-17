import React from "react";
import { Box, FlexBox, Text } from "Components/Universal";
import theme from "styles/theme";
import { getTimeGap } from "utils/time";
import { ButtonList } from "./ButtonList";
import { useModifyArticle } from "../hooks/useModifyArticle";
import { useDeleteArticle } from "../hooks/useDeleteArticle";

const ArticleDescription = ({ data }) => {
  const timeGap = getTimeGap(data.itemRegTime);

  const { moveToModifyPage } = useModifyArticle();
  const { deleteArticle } = useDeleteArticle();

  const handleModify = () => moveToModifyPage(data);

  return (
    <>
      <Box marginBottom="30px">
        <FlexBox column gap="11px">
          <Text fontSize="19.5px" fontWeight={600}>
            {data.itemTitle}
          </Text>
          <Text
            fontSize="13px"
            color={theme.colors.dark}
            fontWeight={500}
          >{`${data.category} ∙ ${timeGap} 전`}</Text>
          <Text
            fontSize="17.5px"
            fontWeight={700}
          >{`${data.cost.toLocaleString()}원`}</Text>
        </FlexBox>
      </Box>

      <Text fontSize="16.5px" lineHeight={1.4} whiteSpace="pre-wrap">
        {data.description}
      </Text>
      <FlexBox spaceBetween verticalMargin="24px">
        <Text
          fontSize="14px"
          fontWeight={500}
          color={theme.colors.dark}
        >{`조회 ${data.viewCnt}`}</Text>

        <ButtonList
          data={[
            { text: "수정", callback: handleModify },
            { text: "삭제", callback: deleteArticle },
          ]}
        />
      </FlexBox>
    </>
  );
};

export default ArticleDescription;
