import React from "react";
import styled from "styled-components";
import { DotButton } from "Components/Universal/Button";
import { FlexBox } from "Components/Universal";

const DotContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 45px;
  ${(props) => props.theme.box.linearGradient};
`;

const DotSwiperButtonList = ({ curIndex, listSize, onClicked }) => {
  const range = [...Array(listSize)].map((v, i) => i);
  return (
    <DotContainer>
      <FlexBox center gap="7px">
        {range?.map((d, index) => (
          <DotButton
            key={index}
            size="8px"
            color="white"
            off={index !== curIndex}
            onClick={() =>
              onClicked(index >= curIndex ? (index === curIndex ? 0 : 1) : -1)
            }
          />
        ))}
      </FlexBox>
    </DotContainer>
  );
};
export default DotSwiperButtonList;
