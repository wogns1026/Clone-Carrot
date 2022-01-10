import React, { useEffect, useState } from "react";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import Content from "Components/Content/Content";
import ContentContainer from "Components/Content/ContentContainer";
import { Box, LazyBackgroundImage } from "Components/Universal";
import { getBannerData } from "api";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getBannerData();
        setBannerData(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
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
          gap="50px"
        >
          <Content
            title={title}
            description={description}
            btn={btn}
            list={list}
          />
          <Box width="100%" height="600px">
            <LazyBackgroundImage center src={imgSrc} />
          </Box>
        </ContentContainer>
      )
    )
  );
};
export default Banner;