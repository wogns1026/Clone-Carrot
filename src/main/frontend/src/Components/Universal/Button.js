import styled, { css } from "styled-components";
import LinkTo from "./LinkTo";
import { LazyIcon, LazyImage } from "Components/Universal/Image";

const StyledButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.color || "transparent"};
  opacity: ${(props) => props.off && "0.3"};
  transition: 0.3s ease;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  padding: 0;
  ${(props) => {
    return css`
      &:active,
      &:hover {
        background: ${props.theme.colors.grey};
        opacity: 0.5;
      }
    `;
  }}
  ${(props) => {
    if (props.attach) {
      return css`
        ${props.theme.box.absolute}
      `;
    }
  }}
`;

export const Button = ({ to, onClick, children, ...rest }) =>
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

export const IconButton = ({
  to,
  onClick,
  size,
  src,
  reverse,
  children,
  ...rest
}) =>
  to ? (
    <LinkTo to={to}>
      <StyledButton onClick={onClick} {...rest}>
        <LazyIcon size={size} src={src} reverse={reverse} />
      </StyledButton>
    </LinkTo>
  ) : (
    <StyledButton onClick={onClick} {...rest}>
      <LazyIcon size={size} src={src} reverse={reverse} />
    </StyledButton>
  );

export const ImageButton = ({ to, onClick, src, children, ...rest }) =>
  to ? (
    <LinkTo to={to}>
      <StyledButton onClick={onClick} {...rest}>
        <LazyImage src={src} />
      </StyledButton>
    </LinkTo>
  ) : (
    <StyledButton onClick={onClick} {...rest}>
      <LazyImage src={src} />
    </StyledButton>
  );

export const DotButton = ({ to, onClick, size, children, ...rest }) => (
  <StyledButton
    onClick={onClick}
    width={size}
    height={size}
    radius="50%"
    {...rest}
  >
    {children}
  </StyledButton>
);
