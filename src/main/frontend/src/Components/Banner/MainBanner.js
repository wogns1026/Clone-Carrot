import React, { useEffect, useState } from "react";
import ContentContainer from "Components/Univeral/ContentContainer";
import ImageContent from "Components/Univeral/ImageContent.js";
import Content from "Components/Univeral/Content.js";
import Loader from "Components/Loading/Loader";
import { getBannerData } from "api";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getBannerData();
        setBannerData(data);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
      }
    };
    getData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    bannerData.map(
      (
        { bgColor, direction, title, description, imgSrc, btn, list },
        index
      ) => (
        <ContentContainer
          key={index}
          bgColor={bgColor}
          direction={direction}
          component={
            <>
              <Content
                title={title}
                description={description}
                btn={btn}
                list={list}
              />
              <ImageContent imgSrc={imgSrc} />
            </>
          }
        ></ContentContainer>
      )
    )
  );
};
export default Banner;
