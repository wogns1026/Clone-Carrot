import React from "react";
import ContentContainer from "Components/Univeral/ContentContainer";
import ImageContent from "Components/Univeral/ImageContent.js";
import Content from "Components/Univeral/Content.js";

const Banner = ({ bannerData }) => {
  return (
    bannerData &&
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
