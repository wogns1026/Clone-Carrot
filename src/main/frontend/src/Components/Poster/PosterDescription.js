import React from "react";
import { Box, FlexBox, TextContent } from "Components/Universal";

const PosterDescription = ({
  item_id,
  item_title = "",
  category = "",
  price = 0,
  description = "",
  view_cnt = 0,
  item_reg_time = 0,
}) => {
  return (
    <FlexBox dir="column">
      <Box marginBottom="30px">
        <FlexBox dir="column" gap="11px">
          <TextContent fontSize="19.5px" fontWeight={600}>
            {item_title}
          </TextContent>
          <TextContent
            fontSize="13px"
            color={`rgba(0,0,0,0.5)`}
            fontWeight={500}
          >{`${category} ∙ ${item_reg_time}시간 전`}</TextContent>
          <TextContent
            fontSize="17.5px"
            fontWeight={700}
          >{`${price.toLocaleString()}원`}</TextContent>
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
        >{`조회 ${view_cnt}`}</TextContent>
      </Box>
    </FlexBox>
  );
};

export default PosterDescription;
