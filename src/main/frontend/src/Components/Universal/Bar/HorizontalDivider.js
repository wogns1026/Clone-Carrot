import styled from "styled-components";

const Line = styled.hr`
  border: none;
  height: ${(props) => props.height || "1px"};
  background-color: ${(props) => props.color || "rgba(0,0,0,0.1)"};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
const HorizontalDivider = ({ marginTop, marginBottom, height, color }) => {
  return (
    <Line
      marginTop={marginTop}
      marginBottom={marginBottom}
      height={height}
      color={color}
    />
  );
};
export default HorizontalDivider;
