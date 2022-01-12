import styled from "styled-components";
import theme from "Style/theme";
import { LinkTo } from "Components/Universal";

const STYLE = theme.text;

const StyledText = styled.span`
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
    return styles.join("\n");
  }};
`;
const Text = ({ to, children, ...rest }) => {
  return to ? (
    <LinkTo to={to}>
      <StyledText {...rest}>{children}</StyledText>
    </LinkTo>
  ) : (
    <StyledText {...rest}>{children}</StyledText>
  );
};
export default Text;
