import styled from "styled-components";

const Background = styled.section`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 760px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1024px;
  height: 760px;
  display: flex;
  flex-direction: ${(props) => props.direction};

  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = ({
  bgColor = "white",
  direction = "row",
  component,
}) => {
  return component ? (
    <Background bgColor={bgColor}>
      <Container direction={direction}>{component}</Container>
    </Background>
  ) : (
    ""
  );
};
export default ContentContainer;
