import styled from "styled-components";

const Text = styled.div`
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || "black"};
  line-height: ${(props) => props.lineHeight || "inherit"};
  white-space: pre;
  text-decoration: ${(props) => props.underline || "none"};
`;
const TextContent = ({
  text,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  underline,
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
      underline={underline}
    >
      {text}
    </Text>
  );
};
export default TextContent;
