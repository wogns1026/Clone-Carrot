import React from "react";
import arrow_left from "images/arrow_left.png";
import arrow_right from "images/arrow_right.png";
import { IconButton } from "Components/Universal";

const ArrowButton = ({ isLeft, offset, ...rest }) => {
  const arrow = isLeft ? arrow_left : arrow_right;
  const left = isLeft ? offset : "";
  const right = isLeft ? "" : offset;

  return <IconButton src={arrow} left={left} right={right} {...rest} />;
};
export default ArrowButton;
