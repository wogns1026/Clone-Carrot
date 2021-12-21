import React from "react";
import { Box, FlexBox, TextContent } from "Components/Universal";

const PosterDescription = ({
  itemId,
  itemTitle = "",
  category = "",
  cost = 0,
  description = "",
  viewCnt = 0,
  itemRegTime = 0,
}) => {
  return (
    <FlexBox dir="column">
      <Box marginBottom="30px">
        <FlexBox dir="column" gap="11px">
          <TextContent fontSize="19.5px" fontWeight={600}>
            {itemTitle}
          </TextContent>
          <TextContent
            fontSize="13px"
            color={`rgba(0,0,0,0.5)`}
            fontWeight={500}
          >{`${category} ∙ ${itemRegTime}시간 전`}</TextContent>
          <TextContent
            fontSize="17.5px"
            fontWeight={700}
          >{`${cost.toLocaleString()}원`}</TextContent>
        </FlexBox>
      </Box>
      <TextContent fontSize="16.5px" lineHeight={1.4}>
        {description}
      </TextContent>
      <Box verticalMargin="25px">
        <TextContent
          fontSize="14px"
          fontWeight={500}
          color={`rgba(0,0,0,0.5)`}
        >{`조회 ${viewCnt}`}</TextContent>
      </Box>
    </FlexBox>
  );
};

export default PosterDescription;
