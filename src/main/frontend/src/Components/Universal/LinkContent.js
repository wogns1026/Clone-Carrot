import styled from "styled-components";
import { Link } from "react-router-dom";
import TextContent from "Components/Universal/TextContent";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TextLink = styled(Link)`
  text-decoration: ${(props) =>
    props.underline === true ? "underline" : "none"};
`;

const LinkContent = ({ content, underline, fontSize, fontWeight, color }) => {
  return content ? (
    <Container>
      {content.map(({ text, path = `/search/${text}`, index }) => (
        <TextLink to={path} key={index}>
          <TextContent
            text={text}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            underline={underline}
          />
        </TextLink>
      ))}
    </Container>
  ) : (
    ""
  );
};
export default LinkContent;
