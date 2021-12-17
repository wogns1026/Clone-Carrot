import React from "react";
import styled from "styled-components";

const DotContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0px;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.4));
`;
const Dot = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "0.8" : "0.4")};
`;

const DotSwiperButtonList = ({ curIndex, listSize, onClicked }) => {
  const range = [...Array(listSize)].map((v, i) => i);
  return (
    <DotContainer>
      {range?.map((d, index) => (
        <Dot
          key={index}
          onClick={() =>
            onClicked(index >= curIndex ? (index === curIndex ? 0 : 1) : -1)
          }
          selected={index === curIndex}
        />
      ))}
    </DotContainer>
  );
};
export default DotSwiperButtonList;
