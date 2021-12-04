import React, { useEffect, useState } from "react";
import Loader from "Components/Loading/Loader";
import { getBannerData } from "api";
import ContentContainer from "Components/Universal/ContentContainer";
import Content from "Components/Universal/Content";
import ImageContent from "Components/Universal/ImageContent";

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
