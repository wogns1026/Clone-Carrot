import React from "react";
import { FlexBox, Text } from "Components/Universal";
import theme from "styles/theme";

const SellerReviewDescription = ({ content, timeGap }) => {
  return (
    <FlexBox column>
      <Text fontSize="15px" lineHeight={1.4} whiteSpace="pre-wrap">
        {content}
      </Text>
      <FlexBox flexAlign="center" marginTop="10px" gap="10px">
        <Text
          fontSize="13px"
          color={theme.colors.dark}
          fontWeight={500}
        >{`${timeGap} 전`}</Text>
      </FlexBox>
    </FlexBox>
  );
};
export default SellerReviewDescription;
