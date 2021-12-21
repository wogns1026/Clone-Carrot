import React from "react";
import styled from "styled-components";
import defaultImg from "images/logo.svg";
import { Link } from "react-router-dom";

const Container = styled.article`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  ${(props) => props.theme.background.center};
  background-image: url(${(props) => props.bgUrl});
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  height: ${(props) => props.height};
  margin-bottom: 17px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
  /* 글자 튀어나가는 부분 깔끔하게 처리 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 11px;
`;

const Cost = styled.div`
  font-weight: 700;
  margin-bottom: 11px;
`;
const Location = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
const ViewCount = styled.div`
  font-size: 12.5px;
  opacity: 0.6;
`;

const TradePoster = ({
  itemId,
  image = defaultImg,
  itemTitle,
  cost = 0,
  location,
  viewCnt = 0,
  height = "210px",
}) => {
  return (
    <Link
      to={{
        pathname: `/trade_post/${itemId}`,
        state: { image, itemTitle, cost, location, ViewCount },
      }}
    >
      <Container>
        <ImageContainer height={height}>
          <Image bgUrl={image} alt="이미지" />
        </ImageContainer>
        <Title>{itemTitle}</Title>
        <Cost>{`${cost.toLocaleString()}원`}</Cost>
        <Location>{location}</Location>
        <ViewCount>{`관심 ${viewCnt}`}</ViewCount>
      </Container>
    </Link>
  );
};

export default TradePoster;
