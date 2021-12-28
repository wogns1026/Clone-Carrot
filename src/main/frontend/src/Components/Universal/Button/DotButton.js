import { StyledButton } from "./Button";

const DotButton = ({ to, onClick, size, children, ...rest }) => (
  <StyledButton onClick={onClick} width={size} height={size} round {...rest}>
    {children}
  </StyledButton>
);
export default DotButton;
