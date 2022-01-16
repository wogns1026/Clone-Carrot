import React from "react";
import Content from "./Content";
import {
  Box,
  ContentContainer,
  LazyBackgroundImage,
} from "Components/Universal";
import theme from "Style/theme";
import { bannerData } from "./bannerData";

const Banner = () => {
  return bannerData.map(({ bgColor, direction, imgSrc, ...rest }, index) => (
    <ContentContainer
      width={theme.size.window.home}
      key={index}
      bgColor={bgColor}
      flexDirection={direction}
      gap="50px"
      height="780px"
    >
      <Content {...rest} />
      <Box width="100%" maxWidth="600px" height="600px">
        <LazyBackgroundImage center src={imgSrc} />
      </Box>
    </ContentContainer>
  ));
};
export default Banner;
