import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextLink = styled(Link)`
  text-decoration: ${(props) =>
    props.underline === true ? "underline" : "none"};
`;

const LinkContent = ({ content, underline = false }) => {
  return content
    ? content.map(({ text, path = `/search/${text}` }, index) => (
        <Container key={index}>
          <TextLink to={path} underline={underline}>
            {text}
          </TextLink>
        </Container>
      ))
    : "";
};
export default LinkContent;
