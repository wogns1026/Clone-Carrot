import React, { useEffect, useState } from "react";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getBannerData } from "api";
import ContentContainer from "Components/Universal/ContentContainer";
import Content from "Components/Universal/Content";
import { LazyBackgroundImage } from "Components/Universal/Image";
import { SizeBox } from "Components/Universal/Box";

const MainBanner = () => {
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
          <SizeBox width="100%" height="600px">
            <LazyBackgroundImage src={imgSrc} />
          </SizeBox>
        </ContentContainer>
      )
    )
  );
};
export default MainBanner;
