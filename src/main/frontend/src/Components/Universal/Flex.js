import theme from "Style/theme";
import styled from "styled-components";

const STYLE = theme.flex;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};

  ${(props) => props.theme.box.fullSize};

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
export const FlexBox = ({ dir, gap, children, ...rest }) => {
  return (
    <Flex dir={dir} gap={gap} {...rest}>
      {children}
    </Flex>
  );
};
export default FlexBox;
