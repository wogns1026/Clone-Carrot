import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};

  ${(props) => props.theme.box.fullSize};
`;
export const CenterFlexBox = ({ gap, children }) => {
  return (
    <Flex dir="row" gap={gap} justify="center" align="center">
      {children}
    </Flex>
  );
};
export const CenterColumnFlexBox = ({ gap, children }) => {
  return (
    <Flex dir="column" gap={gap} justify="center" align="center">
      {children}
    </Flex>
  );
};

export const SpaceBetweenFlexBox = ({ dir, gap, children }) => {
  return (
    <Flex dir={dir} gap={gap} justify="space-between">
      {children}
    </Flex>
  );
};

export const FlexBox = ({ dir, gap, children }) => {
  return (
    <Flex dir={dir} gap={gap}>
      {children}
    </Flex>
  );
};
