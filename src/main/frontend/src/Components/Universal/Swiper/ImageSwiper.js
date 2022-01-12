import React, { useState } from "react";
import styled from "styled-components";
import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";
import { ArrowButton, DotSwiperButtonList } from "Components/Universal";
import defaultImg from "images/logo.svg";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
`;
const SlideContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
`;

const PageContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

const Page = styled(animated.div)`
  height: 100%;
  touch-action: none;
  will-change: transform;
  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
    0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);

  background-repeat: no-repeat;
  background-image: ${(props) => props.bgimg};
  ${(props) => props.theme.image.center};
  scale: ${(props) => props.sacle};
`;

const ImageSwiper = ({ imageList = [defaultImg] }) => {
  const [page, setPage] = useState(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
    imageList.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );

  const updateWindow = ({ p = page, xOffset = 0, scale = 1 }) => {
    api.start((i) => {
      if (i < p - 1 || i > p + 1) {
        // active 이미지의 인접한 이미지만 보이기
        return { display: "none" };
      }
      return {
        x: (i - p) * width + xOffset,
        scale: scale,
        display: "block",
      };
    });
  };

  const swipe = (n) => {
    const nextPage = clamp(page + n, 0, imageList.length - 1);
    setPage(nextPage);
    updateWindow({ p: nextPage });
  };
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      // mx : Drag한 x offset
      // direction : (좌~우) -1~0~1
      // distance : abs(중심으로 부터 움직인 x거리)
      if (active && distance > width / 2) {
        const offset = xDir > 0 ? -1 : 1;
        setPage(clamp(page + offset, 0, imageList.length - 1));
        // 좌 드레그시 next page로 이동
        cancel();
      }
      updateWindow({
        p: page,
        xOffset: active ? mx : 0,
        scale: active ? 1 - distance / width / 2 : 1,
      });
    }
  );
  return (
    <Container>
      <SlideContainer ref={ref}>
        {props.map(({ x, display, scale }, index) => (
          <PageContainer key={index} {...bind()} style={{ display, x }}>
            <Page scale={scale} bgimg={`url(${imageList[index]})`} />
          </PageContainer>
        ))}

        <DotSwiperButtonList
          curIndex={page}
          listSize={imageList.length}
          onClicked={swipe}
        />
      </SlideContainer>
      <ArrowButton
        isLeft={true}
        offset="-50px"
        width="50px"
        height="100%"
        size="25px"
        absoluteTop
        onClick={() => swipe(-1)}
      />
      <ArrowButton
        isLeft={false}
        offset="-50px"
        width="50px"
        height="100%"
        size="25px"
        absoluteTop
        onClick={() => swipe(1)}
      />
    </Container>
  );
};
export default ImageSwiper;
