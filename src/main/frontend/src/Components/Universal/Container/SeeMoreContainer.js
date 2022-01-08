import React from "react";
import { Box, Text, Button, HorizontalDivider } from "Components/Universal";
import theme from "Style/theme";

const SeeMoreContainer = ({ title, onClicked, children }) => {
  return (
    <Box
      fullSize
      bgColor={theme.colors.white}
      border={theme.colors.grey}
      borderRadius="10px"
    >
      <Box horizontalMargin="40px">
        <Box verticalMargin="23px">
          <Text fontSize="18px" fontWeight={800}>
            {title}
          </Text>
        </Box>
        {children}
      </Box>
      <HorizontalDivider />
      <Button fullSize onClick={onClicked} height="50px">
        <Text fontSize="16px" opacity={0.6}>
          더보기
        </Text>
      </Button>
    </Box>
  );
};
export default SeeMoreContainer;
