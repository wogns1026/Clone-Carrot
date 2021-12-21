import styled from "styled-components";

const Background = styled.section`
  background-color: ${(props) => props.bgColor || "white"};
  width: 100%;
  height: ${(props) => props.height || "780px"};
  min-height: ${(props) => props.minHeight};

  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  height,
  minHeight,
  gap,
  children,
}) => {
  return (
    <Background bgColor={bgColor} height={height} minHeight={minHeight}>
      <Container width={width} direction={direction} gap={gap}>
        {children}
      </Container>
    </Background>
  );
};
export default ContentContainer;
