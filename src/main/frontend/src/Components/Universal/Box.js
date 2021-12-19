import theme from "Style/theme";
import styled, { css } from "styled-components";

export const boxType = Object.keys(theme.box);
const StyledBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  margin: ${({ margin }) => margin};
  background-color: ${({ bgColor }) => bgColor};

  ${(props) => {
    if (props.fixed) {
      return css`
        ${props.theme.box.fixed}
      `;
    }
  }}
`;
/*
 * * Default (4방향 margin, width, height 지정)
 * * FullSize (width=100%, height=100%)
 * * Vertical (margin, 0, margin, 0)
 * * Horizontal (0, margin, 0, margin)
 * * 섞어서 넣어도 동장하도록 구현?
 */
export const Box = ({ types = [], children, marginSize, ...rest }) => {
  let cssStyle = types.map((type) => theme.box[type]).join();
  console.log(theme.box.vertical("10"));
  console.log(cssStyle);
  return (
    <StyledBox margin={`${marginSize} 0 ${marginSize} 0`} {...rest}>
      {children}
    </StyledBox>
  );
};

export const VerticalSpaceBox = ({ marginSize, children, ...rest }) => {
  return (
    <StyledBox margin={`${marginSize} 0 ${marginSize} 0`} {...rest}>
      {children}
    </StyledBox>
  );
};
export const HorizontalSpaceBox = ({ marginSize, children, ...rest }) => {
  return (
    <StyledBox margin={`0 ${marginSize} 0 ${marginSize}`} {...rest}>
      {children}
    </StyledBox>
  );
};

export const SpaceBox = ({ marginSize, children, ...rest }) => {
  return (
    <StyledBox margin={marginSize} {...rest}>
      {children}
    </StyledBox>
  );
};

export const FullSizeBox = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export const SizeBox = ({ width, height, children, ...rest }) => {
  return (
    <StyledBox width={width} height={height} {...rest}>
      {children}
    </StyledBox>
  );
};
