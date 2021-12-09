import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TextLink = styled(Link)`
  text-decoration: ${(props) =>
    props.underline === true ? "underline" : "none"};
`;

const LinkContent = ({ content, underline = false }) => {
  return content ? (
    <Container>
      {content.map(({ text, path = `/search/${text}`, index }) => (
        <TextLink to={path} key={index} underline={underline}>
          {text}
        </TextLink>
      ))}
    </Container>
  ) : (
    ""
  );
};
export default LinkContent;
