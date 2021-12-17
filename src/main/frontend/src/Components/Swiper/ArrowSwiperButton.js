import React from "react";
import styled, { css } from "styled-components";

const Button = css`
  position: absolute;
  width: 100px;
  height: 100%;

  top: 0;
  padding: 16px;
  cursor: pointer;
  user-select: none;
  font-size: 25px;

  border: none;
  border-radius: 0 3px 3px 0;
  transition: 0.3s ease;
  background-color: transparent;
  opacity: 0.7;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 0.3;
  }
`;
const LeftButton = styled.button`
  ${Button};
  left: -70px;
`;
const RightButton = styled.button`
  ${Button};
  right: -70px;
`;
const ArrowSwiperButton = ({ isNext, onButtonClicked }) => {
  return isNext ? (
    <RightButton onClick={onButtonClicked}>&#10095;</RightButton>
  ) : (
    <LeftButton onClick={onButtonClicked}>&#10094;</LeftButton>
  );
};
export default ArrowSwiperButton;
