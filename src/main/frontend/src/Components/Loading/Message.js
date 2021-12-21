import React from "react";
import styled from "styled-components";
import { FlexBox } from "Components/Universal/Flex";

const Container = styled.div`
  width: 100vw;
`;
const Text = styled.span`
  color: ${(props) => props.color || props.theme.colors.red};
`;

const Message = ({ text, color }) => (
  <Container>
    <FlexBox flexJustify="center">
      <Text color={color}>{text}</Text>
    </FlexBox>
  </Container>
);
export default Message;
