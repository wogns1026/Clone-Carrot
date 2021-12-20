import theme from "Style/theme";
import styled from "styled-components";

const STYLE = theme.box;

const StyledBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${({ margin }) => margin};
  background-color: ${({ bgColor }) => bgColor};

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

  ${({ fixed }) => fixed && `${theme.box.fixed}`};
`;
export const Box = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
export default Box;
