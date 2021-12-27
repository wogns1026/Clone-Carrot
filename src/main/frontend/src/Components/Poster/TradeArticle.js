import React from "react";
import styled from "styled-components";
import defaultImg from "images/logo.svg";
import { FlexBox, LazyBackgroundImage, LinkTo } from "Components/Universal";
import theme from "Style/theme";
import ArticleInfo from "./ArticleInfo";

const ImageContainer = styled.div`
  height: ${(props) => props.height};
  margin-bottom: 17px;
  position: relative;
  &:hover {
    ${LazyBackgroundImage} {
      opacity: 0.3;
    }
  }
`;
const TradeArticle = ({
  itemId,
  image = defaultImg,
  itemTitle,
  cost = 0,
  location,
  viewCnt = 0,
  height = "210px",
}) => {
  return (
    <LinkTo to={{ pathname: `/articles/${itemId}` }}>
      <FlexBox column>
        <ImageContainer height={height}>
          <LazyBackgroundImage
            borderRadius="10px"
            src={image}
            center
            border={theme.colors.lightDark}
          />
        </ImageContainer>
        <ArticleInfo
          itemTitle={itemTitle}
          cost={`${cost.toLocaleString()}원`}
          location={location}
          viewCnt={`관심 ${viewCnt}`}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default TradeArticle;
