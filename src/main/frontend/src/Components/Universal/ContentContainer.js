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
  width: 1024px;
  display: flex;
  flex-direction: ${(props) => props.direction};

  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = ({
  bgColor = "white",
  direction = "row",
  height = "760px",
  component,
}) => {
  return component ? (
    <Background bgColor={bgColor} height={height}>
      <Container direction={direction}>{component}</Container>
    </Background>
  ) : (
    ""
  );
};
export default ContentContainer;
