import React from "react";
import defaultImg from "images/logo.svg";
import { LazyBackgroundImage } from "Components/Universal";
import theme from "styles/theme";

const MannerFace = ({ id, mannerTemper }) => {
  return (
    <LazyBackgroundImage
      src={defaultImg}
      size="25px"
      round
      center
      marginTop="3px"
      border2x={theme.colors.green}
    />
  );
};

export default MannerFace;
