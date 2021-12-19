import React from "react";
import styled from "styled-components";
import { useLazyImageObserver } from "Hooks/useLazyImageObserver";

const BackgroundImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  ${(props) => props.theme.background.center};
`;
export const Icon = styled.img`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border-radius: ${(props) => (props.isCircle ? "50%" : "0%")};
  transform: ${(props) => props.reverse && "scaleX(-1)"};
`;

export const LazyIcon = React.memo(({ src, ...rest }) => {
  const { imgSrc, imgRef } = useLazyImageObserver({ src });
  return <Icon ref={imgRef} src={imgSrc} isCircle={false} {...rest} />;
});

export const LazyCircleIcon = React.memo(({ src, size, alt = "image" }) => {
  const { imgSrc, imgRef } = useLazyImageObserver({ src });
  return (
    <Icon ref={imgRef} src={imgSrc} size={size} alt={alt} isCircle={true} />
  );
});

export const LazyImage = React.memo(({ src, alt = "image" }) => {
  const { imgSrc, imgRef } = useLazyImageObserver({ src });
  return <img ref={imgRef} src={imgSrc} alt={alt} />;
});

export const LazyBackgroundImage = React.memo(({ src, alt = "image" }) => {
  const { imgSrc, imgRef } = useLazyImageObserver({ src });
  return <BackgroundImg ref={imgRef} src={imgSrc} alt={alt} />;
});
