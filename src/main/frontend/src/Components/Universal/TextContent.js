import styled from "styled-components";
import LinkTo from "./LinkTo";
import theme from "Style/theme";

const STYLE = theme.text;

const Text = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  white-space: ${(props) => props.whiteSpace || "pre"};
  text-decoration: ${(props) => props.underline};

  ${(props) => {
    const styles = [];
    Object.keys(props).forEach((key) => {
      if (STYLE[key]) {
        if (typeof STYLE[key] === "function") {
          styles.push(STYLE[key](props[key]));
        } else {
          styles.push(`${STYLE[key]}`);
        }
      }
    });
    return styles.join();
  }}
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
