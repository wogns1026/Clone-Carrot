import TextContent from "Components/Universal/TextContent";
import React from "react";
import styled from "styled-components";
import { FlexBox } from "Components/Universal/Flex";
import { VerticalSpaceBox } from "Components/Universal/Box";

const Header = styled.div`
  margin-bottom: 30px;
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
    <FlexBox dir="column">
      <Header>
        <FlexBox dir="column" gap="11px">
          <TextContent fontSize={"19.5px"} fontWeight={"600"}>
            {item_title}
          </TextContent>
          <TextContent
            fontSize={"13px"}
            color={`rgba(0,0,0,0.5)`}
            fontWeight={"500"}
          >{`${category} ∙ ${item_reg_time}시간 전`}</TextContent>
          <TextContent
            fontSize={"17.5px"}
            fontWeight={"700"}
          >{`${price.toLocaleString()}원`}</TextContent>
        </FlexBox>
      </Header>
      <TextContent fontSize={"16.5px"} lineHeight={1.4}>
        {description}
      </TextContent>
      <VerticalSpaceBox marginSize="25px">
        <TextContent
          fontSize={"14px"}
          fontWeight={"500"}
          color={`rgba(0,0,0,0.5)`}
        >{`조회 ${view_cnt}`}</TextContent>
      </VerticalSpaceBox>
    </FlexBox>
  );
};

export default PosterDescription;
