import React from "react";
import { Box, FlexBox, DotButton } from "Components/Universal";
import theme from "Style/theme";

const DotSwiperButtonList = ({ curIndex, listSize, onClicked }) => {
  const range = [...Array(listSize)].map((v, i) => i);
  return (
    <Box
      width="100%"
      height="45px"
      absoluteBottom
      linearGradient={[theme.colors.lightGrey, theme.colors.darkGrey]}
    >
      <FlexBox fullSize center gap="7px">
        {range?.map((d, index) => (
          <DotButton
            key={index}
            size="8px"
            color={theme.colors.white}
            off={index !== curIndex}
            onClick={() =>
              onClicked(index >= curIndex ? (index === curIndex ? 0 : 1) : -1)
            }
          />
        ))}
      </FlexBox>
    </Box>
  );
};
export default DotSwiperButtonList;
