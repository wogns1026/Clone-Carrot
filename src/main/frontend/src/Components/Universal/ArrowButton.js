import React from "react";
import { IconButton } from "Components/Universal/Button";
import arrow_left from "images/arrow_left.png";
import arrow_right from "images/arrow_right.png";

export const ArrowButton = ({ width, size, isLeft, offset, onClicked }) => {
  const arrow = isLeft ? arrow_left : arrow_right;
  const left = isLeft ? offset : "";
  const right = isLeft ? "" : offset;

  return (
    <IconButton
      src={arrow}
      size={size}
      width={width}
      height="100%"
      attach={true}
      left={left}
      right={right}
      onClick={onClicked}
    ></IconButton>
  );
};
