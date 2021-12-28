import styled from "styled-components";
import theme from "Style/theme";
import { LinkTo } from "Components/Universal";

const STYLE = theme.button;
export const StyledButton = styled.button`
  cursor: pointer;

  border: none;
  background-color: ${(props) => props.color || "transparent"};
  opacity: ${(props) => props.off && "0.3"};
  transition: 0.3s ease;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  padding: 0;
  ${(props) => {
    return theme.button.interactive;
  }}

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
  }}
`;

const Button = ({ to, onClick, children, ...rest }) =>
  to ? (
    <LinkTo to={to}>
      <StyledButton onClick={onClick} {...rest}>
        {children}
      </StyledButton>
    </LinkTo>
  ) : (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
export default Button;
