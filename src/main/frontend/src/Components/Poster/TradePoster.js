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
  background-image: url(${(props) => props.bgUrl});
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center center;
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

const Price = styled.div`
  font-weight: 700;
  margin-bottom: 11px;
`;
const Location = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
const Interest = styled.div`
  font-size: 12.5px;
  opacity: 0.6;
`;

const TradePoster = ({
  id,
  imgUrl = defaultImg,
  title,
  price = 0,
  location,
  interest = 0,
  height = "210px",
}) => {
  return (
    <Link
      to={{
        pathname: `/trade_post/${id}`,
        state: { id, imgUrl, title, price, location, interest },
      }}
    >
      <Container>
        <ImageContainer height={height}>
          <Image bgUrl={imgUrl} alt="이미지" />
        </ImageContainer>
        <Title>{title}</Title>
        <Price>{`${price.toLocaleString()}원`}</Price>
        <Location>{location}</Location>
        <Interest>{`관심 ${interest}`}</Interest>
      </Container>
    </Link>
  );
};

export default TradePoster;
