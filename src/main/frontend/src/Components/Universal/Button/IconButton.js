import LazyImage from "../Image/LazyImage";
import LinkTo from "../Link/LinkTo";
import { StyledButton } from "./Button";

const IconButton = ({ to, onClick, size, src, children, ...rest }) =>
  to ? (
    <LinkTo to={to}>
      <StyledButton onClick={onClick} {...rest}>
        <LazyImage size={size} src={src} />
      </StyledButton>
    </LinkTo>
  ) : (
    <StyledButton onClick={onClick} {...rest}>
      <LazyImage size={size} src={src} />
    </StyledButton>
  );
export default IconButton;
