import styled from "styled-components";
import { FlexBox } from "Components/Universal";

const Container = styled.div`
  width: ${(props) => props.width || "1024px"};
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) =>
    props.direction === "row" || props.direction === "row-reverse"
      ? "space-between"
      : "center"};
  align-items: center;
  gap: ${(props) => props.gap};
`;

const ContentContainer = ({
  bgColor,
  direction,
  width,
  height = "780px",
  minHeight,
  gap,
  children,
}) => {
  return (
    <FlexBox
      center
      width="100%"
      height={height}
      minHeight={minHeight}
      bgColor={bgColor}
    >
      <Container width={width} direction={direction} gap={gap}>
        {children}
      </Container>
    </FlexBox>
  );
};
export default ContentContainer;
