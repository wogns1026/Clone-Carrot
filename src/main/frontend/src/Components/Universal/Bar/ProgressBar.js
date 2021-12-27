import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "4px"};
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;
const Background = styled(BaseBox)`
  background: ${(props) => props.bgColor || "rgba(0, 0, 0, 0.07)"};
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: ${(props) => props.color || "green"};
  width: ${(props) => `${props.percent}%`};
`;

const ProgressBar = ({ width, height, percent, bgColor, progressColor }) => {
  return (
    <Container width={width} height={height}>
      <Background bgColor={bgColor} />
      <Progress percent={percent} color={progressColor} />
    </Container>
  );
};
export default ProgressBar;
