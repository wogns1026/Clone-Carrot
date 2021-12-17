import styled from "styled-components";
import LinkContent from "./LinkContent";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LinkContentList = ({
  content,
  underline,
  fontSize,
  fontWeight,
  color,
}) => {
  return (
    <Container>
      {content.map((con, index) => (
        <LinkContent
          key={index}
          content={con}
          underline={underline}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
        />
      ))}
    </Container>
  );
};
export default LinkContentList;
