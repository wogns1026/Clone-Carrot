import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { getBannerData } from "api";
import ContentContainer from "Components/Universal/ContentContainer";
import Content from "Components/Universal/Content";

const Image = styled.img`
  background-size: cover;
  background-position: center center;
  max-width: 512px;
`;

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
    <Message color="red" text={error} />
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
              <Image src={imgSrc} alt="이미지" />
            </>
          }
        ></ContentContainer>
      )
    )
  );
};
export default MainBanner;
