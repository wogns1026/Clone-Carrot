import styled from "styled-components";
import LinkTo from "./LinkTo";

const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  white-space: ${({ whiteSpace }) => whiteSpace || "pre"};
  text-decoration: ${({ underline }) => underline};
`;
const TextContent = ({ to, children, ...rest }) => {
  return to ? (
    <LinkTo to={to}>
      <Text {...rest}>{children}</Text>
    </LinkTo>
  ) : (
    <Text {...rest}>{children}</Text>
  );
};
export default TextContent;
