import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)``;
const LinkTo = ({ to, children, ...rest }) => (
  <StyledLink to={to} {...rest}>
    {children}
  </StyledLink>
);
export default LinkTo;
