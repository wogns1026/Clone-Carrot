import styled from "styled-components";

const Background = styled.section`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: ${(props) => props.height};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) =>
    props.direction === "row" || props.direction === "row-reverse"
      ? "space-between"
      : "center"};
  align-items: center;
`;

const ContentContainer = ({
  bgColor = "white",
  direction = "row",
  width = "1024px",
  height = "760px",
  component,
}) => {
  return component ? (
    <Background bgColor={bgColor} height={height}>
      <Container width={width} direction={direction}>
        {component}
      </Container>
    </Background>
  ) : (
    ""
  );
};
export default ContentContainer;
