import theme from "styles/theme";
import styled from "styled-components";

const STYLE = theme.flex;

const Flex = styled.div`
  display: flex;

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
const FlexBox = ({ children, ...rest }) => {
  return <Flex {...rest}>{children}</Flex>;
};
export default FlexBox;
