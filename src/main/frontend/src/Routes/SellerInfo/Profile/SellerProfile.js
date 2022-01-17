import React from "react";
import { Box, FlexBox, LazyBackgroundImage, Text } from "Components/Universal";
import theme from "styles/theme";

const SellerProfile = ({ sellerInfo }) => {
  return (
    <FlexBox
      width="100%"
      height="60px"
      flexAlign="center"
      gap="22px"
      verticalMargin="30px"
    >
      <LazyBackgroundImage
        size="58px"
        round
        center
        border={theme.colors.lightDark}
      />
      <FlexBox fullSize column flexJustify="space-between">
        <FlexBox flexAlign="flex-end" gap="15px">
          <Text fontSize="22px" fontWeight={700}>
            {sellerInfo.userName}
          </Text>
          <Text fontSize="17px">{sellerInfo.address}</Text>
        </FlexBox>

        <FlexBox flexAlign="center" color={theme.colors.darkGrey}>
          <Box marginRight="20px" fontSize="15px">
            <Text>{`매너온도 `}</Text>
            <Text fontWeight={700}>{`${sellerInfo.mannerTemper}°C`}</Text>
          </Box>
          <Box marginRight="20px" fontSize="15px">
            <Text>{`재거래희망률 `}</Text>
            <Text fontWeight={700}>{`${sellerInfo.retradeRate}%`}</Text>
          </Box>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default SellerProfile;
