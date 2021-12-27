import React from "react";
import { useLazyImageObserver } from "Hooks/useLazyImageObserver";
import { Image } from "./Image";

const LazyImage = React.memo(({ src, alt = "image", ...rest }) => {
  const { imgSrc, imgRef } = useLazyImageObserver({ src });
  return <Image ref={imgRef} src={imgSrc} alt={alt} {...rest} />;
});
export default LazyImage;
