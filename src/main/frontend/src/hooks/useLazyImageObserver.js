import React, { useEffect, useState, useRef } from "react";
import defaultImg from "images/logo.svg";

const THRESHOLD = 0.1;
//* root와 observer element가 얼만큼 교차되었는가? (0:무접점 1:완전교차)

export function useLazyImageObserver({ src }) {
  const [imgSrc, setImgSrc] = useState(defaultImg);
  //* 처음 값을 null 말고 기본이미지를 넣어서 무조건 렌더링은 되도록 하는 게 좋다.

  const imgRef = useRef(null);

  useEffect(() => {
    let observer;
    if (!src) {
      return;
    }
    if (imgRef) {
      //* 기본이미지가 없다면 !imgSrc 조건 추가필요

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            //*  target이 root 영역에 교차되면 true
            setImgSrc(src);
            observer.unobserve(imgRef.current);
          }
        },
        { threshold: [THRESHOLD] }
        //* 추가 option : root:교차 기준대상, rootMargin:교차 기준대상 Margin
      );
    }
    observer.observe(imgRef.current);

    return () => observer && observer.disconnect(imgRef);
  }, [imgRef, imgSrc, src]);

  return { imgSrc, imgRef };
}
