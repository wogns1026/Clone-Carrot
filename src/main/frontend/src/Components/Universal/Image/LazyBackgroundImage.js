import React from "react";
import { BackgroundImg } from "./Image";
import { useLazyImageObserver } from "Hooks/useLazyImageObserver";

const LazyBackgroundImage = React.memo(({ src, alt = "image", ...rest }) => {
  const { imgSrc, imgRef } = useLazyImageObserver({ src });
  return <BackgroundImg ref={imgRef} src={imgSrc} alt={alt} {...rest} />;
});
export default LazyBackgroundImage;
