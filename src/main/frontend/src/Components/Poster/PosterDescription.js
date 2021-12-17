import TextContent from "Components/Universal/TextContent";
import React from "react";
import styled from "styled-components";

const Container = styled.article`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 30px;
`;
const Footer = styled.div`
  margin: 25px 0;
`;
const PosterDescription = ({
  item_id,
  item_title = "",
  category = "",
  price = 0,
  description = "",
  view_cnt = 0,
  item_reg_time = 0,
}) => {
  return (
    <Container>
      <Header>
        <TextContent text={item_title} fontSize={"19.5px"} fontWeight={"600"} />
        <TextContent
          text={`${category} ∙ ${item_reg_time}시간 전`}
          fontSize={"13px"}
          color={`rgba(0,0,0,0.5)`}
          fontWeight={"500"}
        />
        <TextContent
          text={`${price.toLocaleString()}원`}
          fontSize={"17.5px"}
          fontWeight={"700"}
        />
      </Header>
      <TextContent text={description} fontSize={"16.5px"} lineHeight={1.4} />
      <Footer>
        <TextContent
          text={`조회 ${view_cnt}`}
          fontSize={"14px"}
          fontWeight={"500"}
          color={`rgba(0,0,0,0.5)`}
        />
      </Footer>
    </Container>
  );
};

export default PosterDescription;
