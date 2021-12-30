import React from "react";
import { Box, FlexBox, LazyBackgroundImage, Text } from "Components/Universal";
import theme from "Style/theme";

const SellerProfile = ({
  data: { userId, userName, address, mannerTemper, retradeRate, review },
}) => {
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
            {userName}
          </Text>
          <Text fontSize="17px">{address}</Text>
        </FlexBox>

        <FlexBox flexAlign="center" color={theme.colors.darkGrey}>
          <Box marginRight="20px">
            <Text fontSize="15px">{`매너온도 `}</Text>
            <Text fontSize="15px" fontWeight={700}>{`${mannerTemper}°C`}</Text>
          </Box>
          <Box marginRight="20px">
            <Text fontSize="15px">{`재거래희망률 `}</Text>
            <Text fontSize="15px" fontWeight={700}>{`${retradeRate}%`}</Text>
          </Box>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default SellerProfile;
