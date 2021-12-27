import LazyImage from "../Image/LazyImage";
import LinkTo from "../Link/LinkTo";
import { StyledButton } from "./Button";

const ImageButton = ({ to, onClick, src, children, ...rest }) =>
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
export default ImageButton;
